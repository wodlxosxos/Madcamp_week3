import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const items = [
  {
    userName: '정승안',
    userGender: '남자',
    userSID: 18,
    hourFee: 400,
    dayFee: 1200,
    rating: 4.2,
  },
];
const info = [
  {
    strYear: 21,
    strMonth: 7,
    strDay: 19,
    strHour: 19,
    strMin: 19,
    endYear: 21,
    endMonth: 7,
    endDay: 20,
    endHour: 19,
    endMin: 19,
  },
];

function MyRentBikeScreen({ navigation }) {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  //대여 중인 자전거 하나 받아오기

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <View style={styles.BackOut}>
            <TouchableOpacity
              style={styles.Back}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" color={'#003F5C'} size={35} />
            </TouchableOpacity>
          </View>
          <View style={styles.TitleOut}>
            <Text style={styles.Title}>대여 중인 자전거</Text>
          </View>
        </View>
        <View style={styles.restContainer}>
          <View style={styles.modalBikeContainer}>
            <Image
              style={styles.modalBikeImage}
              source={require('../../Images/bicycle_img.jpg')}
            />
          </View>
          <View style={styles.mainModalContainer}>
            <View style={styles.mainModalTitle}>
              <Text style={styles.mainModalTitleText}>
                자전거 및 소유자 정보
              </Text>
            </View>
            <Text style={styles.mainModalText}>이름 : {items.userName}</Text>
            <Text style={styles.mainModalText}>성별 : {items.userGender}</Text>
            <Text style={styles.mainModalText}>학번 : {items.userSID}</Text>
            <Text style={styles.mainModalText}>평점 : {items.rating}</Text>
            <Text style={styles.mainModalText}>
              시간당 요금 : {items.hourFee} 원 / 일당 요금 : {items.dayFee} 원
            </Text>
            <Text style={styles.mainModalDurationText}>이용기간</Text>
            <View style={styles.durationContainer}>
              <View style={styles.durationTextContainer}>
                <Text style={styles.durationText}>
                  {info.strYear}/{info.strMonth}/{info.strDay}
                </Text>
                <Text style={styles.durationText}>
                  {info.strHour}:{info.strMin}
                </Text>
              </View>
              <View style={styles.durationTextContainerMid}>
                <Text style={styles.durationText}>~</Text>
              </View>
              <View style={styles.durationTextContainer}>
                <Text style={styles.durationText}>
                  {info.endYear}/{info.endMonth}/{info.endDay}
                </Text>
                <Text style={styles.durationText}>
                  {info.endHour}:{info.endMin}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
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
  bikeImage: {
    width: 90,
    height: 90,
  },
  infoContainer: {
    margin: 5,
    //borderLeftWidth: 1,
    //paddingLeft: 5,
    height: '90%',
    width: '100%',
  },
  modalContainer: {
    //backgroundColor: '#10569B',
    backgroundColor: 'white',
    marginBottom: 5,
    height: '100%',
    width: '100%',
    //borderRadius: 35,
    alignSelf: 'center',
  },
  modalTitle: {
    height: '8%',
    //width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
  restContainer: {
    height: '92%',
    width: '100%',
    backgroundColor: 'white',
    //borderBottomLeftRadius: 35,
    //borderBottomRightRadius: 35,
  },
  modalBikeContainer: {
    height: '40%',
    width: '100%',
    //borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalBikeImage: {
    height: '90%',
    width: '82%',
  },
  mainModalContainer: {
    width: '100%',
    height: '50%',
    padding: 30,
  },
  mainModalTitle: {
    alignSelf: 'center',
    width: '100%',
    height: '14%',
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainModalTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 20,
  },
  mainModalText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 15,
    marginBottom: 5,
  },
  mainModalDurationText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  durationContainer: {
    height: '20%',
    flexDirection: 'row',
  },
  durationTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  durationTextContainerMid: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  durationText: { fontFamily: 'SpoqaHanSansNeo-Bold' },
  resBtnContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
});

export default MyRentBikeScreen;
