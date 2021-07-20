import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  useState,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BikeItem from '../../../components/BikeItem';
import FAB from 'react-native-fab';

const data = [
  {
    key: 8,
    emailId: '9@kaist.ac.kr',
    itemTitle: '80년된 자전거 팝니다',
    itemPrice: '800,000원',
    itemDetail:
      '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
    itemReg: 10,
    heartClick: false,
    img: require('../../../Image/b8.jpg'),
    mkType: 'onsale',
  },
  {
    key: 9,
    emailId: '9@kaist.ac.kr',
    itemTitle: '30년된 자전거 팝니다',
    itemPrice: '300,000원',
    itemDetail:
      '제가 LA에 있을때는 말이죠 정말 제가 꿈에 무대인 메이저리그로 진출해서..',
    itemReg: 10,
    heartClick: false,
    img: require('../../../Image/b9.jpg'),
    mkType: 'onsale',
  },
];

function MyOnSaleScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <FlatList
        //todo: purchasecomplete, salecomplete는 목록에서 제거하기
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
                  //todo:함수로 변경해서 거래완료된 type으로 바꾸기,(DB 옮기기?)
                  onPress={() => alert('거래가 성사되었습니다')}>
                  <Text style={styles.Chattext}>거래 성사</Text>
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
    fontSize: 15,
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  priceText: {
    color: 'black',
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
    backgroundColor: '#10569B',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Chattext: {
    color: 'white',
    fontSize: 15,
  },
});

export default MyOnSaleScreen;
