import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Rentalchat({route, navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hii',
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
      <View borderWidth={1} style={styles.Up}>
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
    borderWidth: 1,
    width: '17%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  Chat: {
    flex: 100,
  },
});
