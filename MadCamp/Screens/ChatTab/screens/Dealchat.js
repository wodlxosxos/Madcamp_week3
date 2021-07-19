import React, {useState, useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

export default function Dealchat({route, navigation}) {
  const [messages, setMessages] = useState([]);

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
    <GiftedChat
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
    />
  );
}

/*export default function ChatScreen1({route, navigation}) {
  return (
    <View>
      <Text>chat</Text>
    </View>
  );
}*/
