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

class Dealchat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userName: '',
      recieverName: '',
      messages: [],
    };
  }

  handleChoosePhoto = () => {
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
        fetch('http://192.249.18.145:80/img', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(res => {
            if (res.status === 400) {
              ToastAndroid.show('TEST', ToastAndroid.SHORT);
            }
            res.json();
          })
          .then(json => {})
          .catch(error => console.log('error', error));
      }
    });
  };

  componentDidMount() {
    this.setState({
      userId: this.props.route.params.senderId,
      userName: this.props.route.params.senderName,
      recieverName: this.props.route.params.recieverName,
    });

    this.getMessages();

    this.socket = io('http://192.249.18.145:80/chatsocket');
    this.socket.connect();
    this.socket.on('incommingMessage', () => {
      console.log('called');
      this.getMessages();
    });
  }
  componentWillMount() {}

  getMessages = () => {
    fetch(
      'http://192.249.18.145:80' +
        '/chats/' +
        this.props.route.params.senderName +
        '/' +
        this.props.route.params.recieverName,
    )
      .then(res => {
        if (res.status === 400) {
          ToastAndroid.show('2', ToastAndroid.SHORT);
        } else if (res.status === 200) {
          ToastAndroid.show('1', ToastAndroid.SHORT);
          console.log(res.json);
          res.json().then(json => {
            this.setState(previousState => ({
              messages: GiftedChat.append([], json),
            }));
          });
        }
      })
      .catch(error => console.log('error', error));
  };

  async onSend(messages = []) {
    await this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    this.socket.emit('newMessage', 'sent');

    try {
      let formData = {
        sender: this.state.userName,
        reciever: this.state.recieverName,
        messages: this.state.messages,
      };

      fetch('http://192.249.18.145:80/chatsend', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(res => {
          if (res.status === 400) {
            ToastAndroid.show('TEST', ToastAndroid.SHORT);
          } else if (res.status === 200) {
            ToastAndroid.show('SUCCESS', ToastAndroid.SHORT);
            this.socket.emit('newMessage', 'sent');
          }
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {navigation, route} = this.props;
    return (
      <>
        <View style={styles.Out}>
          <View style={styles.Up}>
            <TouchableOpacity
              style={styles.Back}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back-outline" color={'#0C579F'} size={35} />
            </TouchableOpacity>
            <Text></Text>
          </View>
          <GiftedChat
            alwaysShowSend={true}
            style={styles.Chat}
            messages={this.state.messages}
            renderSend={this.renderSend}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: this.state.userId,
              name: this.state.userName,
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
                      color: 'white',
                      fontFamily: 'CerebriSans-Book',
                    },
                  }}
                  wrapperStyle={{
                    left: {
                      backgroundColor: '#0C579F',
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
                    onPress={this.handleChoosePhoto}>
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
      </>
    );
  }
}
export default Dealchat;

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
