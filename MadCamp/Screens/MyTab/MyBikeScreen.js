import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import MyBikeItem from '../../components/MyBikeItem';

const data = [
  {
    key: 1,
    itemTitle: '자전거 헐값에 팔아요',
    itemPrice: '1,000원',
    itemDetail: '어제 사고났어요',
    itemReg: 10,
    img: '../Image/b5.jpg',
  },
  {
    key: 2,
    itemTitle: 'UBD 한 거 나눔해요~^^',
    itemPrice: '200원',
    itemDetail: '3UBD 한 거라서 조금 사게 팔아요!',
    itemReg: 10,
    img: '../Image/b3.jpg',
  },
];
function MyBikeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.headerText}>내 자전거 관리</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <MyBikeItem items={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    //borderBottomWidth: 0.2,
    //borderColor: 'gray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyBikeScreen;
