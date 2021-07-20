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
  TouchableOpacity,
  Image,
} from 'react-native';

const data = [
  {
    key: 2,
    emailId: '2@kaist.ac.kr',
    itemTitle: '20년된 자전거 팝니다',
    itemPrice: '200,000원',
    itemDetail:
      '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
    itemReg: 10,
    heartClick: false,
    img: require('../../../Image/b2.jpg'),
    mkType: 'purc',
  },
  {
    key: 3,
    emailId: '3@kaist.ac.kr',
    itemTitle: '30년된 자전거 팝니다',
    itemPrice: '300,000원',
    itemDetail:
      '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
    itemReg: 10,
    heartClick: false,
    img: require('../../../Image/b3.jpg'),
    mkType: 'purc',
  },
  {
    key: 4,
    emailId: '4@kaist.ac.kr',
    itemTitle: '40년된 자전거 팝니다',
    itemPrice: '400,000원',
    itemDetail:
      '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
    itemReg: 10,
    heartClick: false,
    img: require('../../../Image/b4.jpg'),
    mkType: 'purc',
  },
];

function MyPurchaseCompleteScreen({route, navigation}) {
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
                  onPress={() => alert('이미 구매한 자전거입니다.')}>
                  <Text style={styles.Chattext}>구매 완료</Text>
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

export default MyPurchaseCompleteScreen;
