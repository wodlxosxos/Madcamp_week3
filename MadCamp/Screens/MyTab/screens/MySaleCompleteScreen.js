import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    key: 10,
    emailId: '9@kaist.ac.kr',
    itemTitle: '100년된 자전거 팝니다',
    itemPrice: '1,000,000원',
    itemDetail: '저에게는 2대의 자전거가 있습니다.',
    itemReg: 30,
    heartClick: false,
    img: require('../../../Image/b10.jpg'),
    mkType: 'salec',
  },
];

function MySaleCompleteScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('디테일', item)}>
            <Image style={styles.bikeImage} source={item.img} />
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>{item.itemTitle}</Text>
              <Text style={styles.priceText}>{item.itemPrice}</Text>
              <View style={styles.ChatOut}>
                <TouchableOpacity
                  style={styles.Chat}
                  onPress={() => alert('이미 판매된 자전거입니다.')}>
                  <Text style={styles.Chattext}>판매 완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        navigation={navigation}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
  },
  bikeImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  infoContainer: {
    margin: 5,
    paddingLeft: 10,
    flexDirection: 'column',
    height: '70%',
    width: '100%',
  },
  titleText: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  priceText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ChatOut: {
    flex: 1,
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Chat: {
    height: '70%',
    width: '25%',
    backgroundColor: 'gray',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Chattext: {
    color: 'white',
    fontSize: 15,
  },
});
export default MySaleCompleteScreen;
