import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAB from 'react-native-fab';

const data = [
  {
    key: 1,
    bikeID: 1,
    hourFee: 100,
    dayFee: 1100,
    img: require('../../Image/b1.jpg'),
  },
  {
    key: 2,
    bikeID: 2,
    hourFee: 200,
    dayFee: 2200,
    img: require('../../Image/b2.jpg'),
  },
  {
    key: 3,
    bikeID: 3,
    hourFee: 300,
    dayFee: 3300,
    img: require('../../Image/b3.jpg'),
  },
  {
    key: 4,
    bikeID: 4,
    hourFee: 400,
    dayFee: 4400,
    img: require('../../Image/b4.jpg'),
  },
  {
    key: 5,
    bikeID: 5,
    hourFee: 500,
    dayFee: 5500,
    img: require('../../Image/b5.jpg'),
  },
];
let dataList = [];
function MyBikeScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hourFee, onChangeHour] = React.useState('');
  const [dayFee, onChangeDay] = React.useState('');
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <View style={styles.BackOut}>
          <TouchableOpacity
            style={styles.Back}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color={'#003F5C'} size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleOut}>
          <Text style={styles.Title}>내 자전거 관리</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.bikeImage} source={item.img} />
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>자전거 ID : {item.bikeID}</Text>
              <Text style={styles.priceText}>
                시간당 요금: {item.hourFee}원
              </Text>
              <Text style={styles.priceText}>일당 요금 : {item.dayFee}원</Text>
              <View style={styles.ChatOut}>
                <TouchableOpacity
                  style={styles.Chat}
                  onPress={() => alert('자전거가 삭제되었습니다.')}>
                  <Text style={styles.Chattext}>삭제</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FAB
        buttonColor="#10569B"
        iconTextColor="white"
        visible={true}
        iconTextComponent={<Icon name="add-outline" size={20} />}
        onClickAction={() => {
          //alert('FAB pressed');
          //navigation.navigate('업로드');
          setModalVisible(true);
        }}></FAB>
      <Modal
        style={{ width: '100%', height: '100%' }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => alert('사진 업로드')}>
            <Image
              style={styles.uploadImg}
              source={require('../../Image/camera.jpg')}></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeHour={onChangeHour}
            value={hourFee}
            placeholder="  ₩ 시간당 요금을 입력하세요 "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeDay={onChangeDay}
            value={dayFee}
            placeholder="  ₩ 하루당 요금을 입력하세요 "
            keyboardType="numeric"
          />
          <View style={styles.resBtnContainer}>
            <TouchableOpacity
              style={styles.resBtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resBtn}
              onPress={() => {
                if (hourFee === '' || dayFee === '') {
                  ToastAndroid.showWithGravity(
                    '입력되지 않은 정보가 존재합니다.',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
                } else {
                  fetch('http://192.249.18.122:80/regNewRentBike', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      user_id: route.params.user_id,
                      user_name: route.params.user_name,
                      hour_fee: hourFee,
                      day_fee: dayFee,
                    }),
                  })
                    .then(res => {
                    })
                    .catch(error => console.log('error', error));
                  setModalVisible(false);
                }
              }}>
              <Text style={styles.btnText}>완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
  },
  BackOut: {
    height: 50,
  },
  Back: {
    height: '100%',
    width: '100%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  TitleOut: {
    height: 50,
  },
  Title: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  modalContainer: {
    backgroundColor: '#10569B',
    width: 250,
    height: 350,
    marginTop: 120,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  uploadImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  resBtnContainer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
  },
  resBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    //backgroundColor: '#10569B',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: '#10569B',
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
  input: {
    height: 60,
    width: 200,
    backgroundColor: 'white',
    borderWidth: 6,
    borderRadius: 20,
    borderColor: '#10569B',
    alignSelf: 'center',
    justifyContent: 'center',
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  ChatOut: {
    flex: 1,
    height: 50,
    //marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Chat: {
    height: '70%',
    width: '20%',
    backgroundColor: '#10569B',
    marginLeft: 20,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Chattext: {
    color: 'white',
    fontSize: 15,
  },
});

export default MyBikeScreen;
