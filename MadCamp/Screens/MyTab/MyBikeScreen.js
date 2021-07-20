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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyBikeItem from '../../components/MyBikeItem';
import FAB from 'react-native-fab';

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
let dataList = [];
function MyBikeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [hourFee, onChangeHour] = React.useState(null);
  const [dayFee, onChangeDay] = React.useState(null);
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
        renderItem={({ item }) => <MyBikeItem items={item} />}
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
          <View style={styles.resBtnContainer}>
            <TouchableOpacity
              style={styles.resBtn}
              onPress={() => {
                setModalVisible(false);
                fetch('http://192.249.18.122:80/signUp', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                  }),
                })
                  .then(res => {
                  })
                  .catch(error => console.log('error', error));
              }}>
              <Text style={styles.btnText}>완료</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resBtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.btnText}>취소</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            onChangeHour={onChangeHour}
            value={hourFee}
            placeholder="₩ 시간당 요금을 입력하세요 "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeDay={onChangeDay}
            value={dayFee}
            placeholder="₩ 하루당 요금을 입력하세요 "
            keyboardType="numeric"
          />
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
    width: 300,
    height: 300,
    marginTop: 150,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  resBtnContainer: {
    width: '80%',
    height: '30%',
    //flexDirection: 'row',
  },
  resBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    height: 40,
    backgroundColor: 'white',
  },
});

export default MyBikeScreen;
