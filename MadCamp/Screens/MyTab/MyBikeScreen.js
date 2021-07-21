import React, { useState, useEffect } from 'react';
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

let dataList = [];
function MyBikeScreen({ route, navigation }) {
  dataList = route.params.sendData;
  const [modalVisible, setModalVisible] = useState(false);
  const [hourFee, setHourFee] = React.useState('');
  const [dayFee, setDayFee] = React.useState('');
  const [building, setBuilding] = React.useState('');
  const [data, setData] = React.useState(route.params.sendData);
  useEffect(() => {
    let dataList = [];
    fetch('http://192.249.18.122:80/getMyRentBike', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: route.params.user_id,
      }),
    })
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
          dataList.push({
            hourFee: String(json[i].hour_fee),
            dayFee: String(json[i].day_fee),
            bikeId: String(json[i].bike_id),
          });
        }
        setData(dataList);
      })
      .catch(error => console.log('error', error));
  }, []);
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
            <Image style={styles.bikeImage} source={require('../../Images/bicycle_img.jpg')} />
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
        }} />
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
            onChangeText={text => setHourFee(text)}
            value={hourFee}
            placeholderTextColor="black"
            placeholder="  ₩ 시간당 요금을 입력하세요 "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setDayFee(text)}
            value={dayFee}
            placeholder="  ₩ 하루당 요금을 입력하세요 "
            placeholderTextColor="black"
            keyboardType="numeric"
          />
          <Text style={{ alignSelf: 'center', color: 'white' }}>| 장소 선택 |</Text>
          <View style={styles.buildContainer}>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('N1')}>
              <Text>N1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('창의학습관')}>
              <Text>창의</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('세종관')}>
              <Text>세종</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('쪽문')}>
              <Text>쪽문</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buildContainer}>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('응용공학동')}>
              <Text style={{ color: 'black' }}>응공</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('미르관/나래관')}>
              <Text style={{ color: 'black' }}> 미르 / 나래</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buildBtn} onPress={() => setBuilding('아름관/소망관/사랑관')}>
              <Text>아름/소망/사랑</Text>
            </TouchableOpacity>
          </View>
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
                      building: building,
                    }),
                  })
                    .then(res => {
                      console.log(res)
                    })
                    .catch(error => console.log('error', error));
                  setBuilding('');
                  setDayFee('');
                  setHourFee('');
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
  buildBtn: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
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
    height: 450,
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
    color: 'black',
  },
  buildContainer: {
    height: 60,
    width: 200,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
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
