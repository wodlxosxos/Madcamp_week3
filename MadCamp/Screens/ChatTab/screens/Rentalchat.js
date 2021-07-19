import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  Composer,
} from 'react-native-gifted-chat';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Rentalchat({route, navigation}) {
  const [messages, setMessages] = useState([]);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log('Image Uri: ');
        console.log(source);
        let axiosConfig = {
          headers: {
            Authorization: 'Client-ID ead116aab30174c',
          },
          timeout: 80000,
        };

        let formData = new FormData();
        formData.append('image', source.uri);
        ToastAndroid.show('Uploading...', ToastAndroid.LONG);

        //upload to imgur
        axios
          .post('http://192.249.18.145:80/img', formData, axiosConfig)
          .then(res => {
            if (res.status === 200) {
              console.log(res.status);
              let {data} = res;
              // this.setState({imageURL: data.data.link});
              const id = this.state.messages.length + 1;
              let imageMsg = [
                {
                  _id: id,
                  text: '',
                  createdAt: new Date(),
                  user: {
                    _id: this.state.userId,
                    name: this.state.userName,
                    avatar: this.state.userPhoto,
                  },
                  image: data.data.link,
                },
              ];

              this.onSend(imageMsg);
              imageMsg = [];
            } else {
              ToastAndroid.show(
                'Uploading failed. Try again',
                ToastAndroid.SHORT,
              );
            }
          });
      }
    });
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.Out}>
      <View style={styles.Up}>
        <TouchableOpacity
          style={styles.Back}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" color={'#0C579F'} size={35} />
        </TouchableOpacity>
        <Text>Hi</Text>
      </View>
      <GiftedChat
        style={styles.Chat}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: 'white',
                  fontFamily: 'CerebriSans-Book',
                },
                left: {
                  color: 'black',
                  fontFamily: 'CerebriSans-Book',
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: 'white',
                },
                right: {
                  backgroundColor: '#0C579F',
                },
              }}
            />
          );
        }}
        renderInputToolbar={props => {
          return (
            <>
              <InputToolbar
                {...props}
                containerStyle={{
                  backgroundColor: '#FFFFFF',
                  borderTopWidth: 0,
                  marginHorizontal: 5,
                  marginLeft: '15%',
                  borderRadius: 80,
                }}
                textInputProps={{
                  style: {
                    color: '#000',
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  },
                  multiline: false,
                  returnKeyType: 'go',
                  onSubmitEditing: () => {
                    if (props.text && props.onSend) {
                      let text = props.text;
                      props.onSend({text: text.trim()}, true);
                    }
                  },
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginLeft: '4%',
                  marginBottom: '1%',
                  bottom: 0,
                }}
                onPress={handleChoosePhoto}>
                <Icon
                  name="image-outline"
                  style={{
                    color: '#0C579F',
                  }}
                  size={32}
                />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Out: {
    flex: 10,
  },
  Up: {
    height: 50,
    flexDirection: 'row',
  },
  Back: {
    height: '100%',
    width: '17%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  Chat: {
    flex: 100,
  },
});
