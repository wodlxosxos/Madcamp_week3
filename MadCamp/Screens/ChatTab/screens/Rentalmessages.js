import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Messages = [
  {
    id: '1',
    recieverName: 'younghoon',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

class Rentalmessages extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.Container}>
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.Card}
              onPress={() =>
                this.props.navigation.navigate('RentalChat', {
                  senderId: 'seungan@',
                  senderName: 'seungan',
                  recieverName: item.recieverName,
                })
              }>
              <View style={styles.UserInfo}>
                <View style={styles.UserImgWrapper}>
                  <Image source={item.userImg} style={styles.UserImg} />
                </View>
                <View style={styles.TextSection}>
                  <View style={styles.UserInfo}>
                    <Text style={styles.UserName}>{item.recieverName}</Text>
                    <Text style={styles.PostTime}>{item.messageTime}</Text>
                  </View>
                  <Text style={styles.MessageText}>{item.messageText}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Rentalmessages;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  Card: {
    width: '100%',
  },
  UserInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  TextSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  UserInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  PostTime: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular',
  },
  MessageText: {
    fontSize: 14,
    color: '#333333',
  },
});
