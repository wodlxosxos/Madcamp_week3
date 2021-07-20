import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function MyScreen({ route, navigation }) {
  const { user_id, user_name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>내정보</Text>
      </View>
      <View style={styles.myInfoContainer}>
        <View style={styles.infoDetContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.userImage}
              source={require('../../Images/default-user-image.png')}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoNameText}>이름 : {user_name}</Text>
          </View>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>
            KAIST Email - fortest@kaist.ac.kr
          </Text>
        </View>
      </View>
      <View style={styles.myBikeContainer}>
        <View style={styles.rentSubTitleContainer}>
          <Text style={styles.rentSubTitleText}>대여</Text>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity
            style={styles.rentBtn}
            onPress={() =>
              navigation.navigate('MyBike', {
                user_name: user_name,
                user_id: user_id,
              })
            }>
            <Text style={styles.rentText}>내 자전거 관리</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity
            style={styles.rentBtn}
            onPress={() => navigation.navigate('MyRentBike')}>
            <Text style={styles.rentText}>대여 중인 자전거</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity
            style={styles.rentBtn}
            onPress={() => navigation.navigate('MyReturn')}>
            <Text style={styles.rentText}>자전거 반납하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.myMarketContainer}>
        <View style={styles.marketSubTitleContainer}>
          <Text style={styles.marketSubTitleText}>마켓</Text>
        </View>
        <View style={styles.marketBtnContainer}>
          <TouchableOpacity
            style={styles.marketBtn}
            onPress={() => navigation.navigate('MyHistory')}>
            <Text style={styles.rentText}>거래내역</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    //alignItems: 'center',
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  myInfoContainer: {
    backgroundColor: 'white',
    marginTop: '5%',
    width: '97%',
    marginLeft: 5,
    borderColor: 'gray',
    borderColor: '#A2A7A5',
    flex: 4,
  },
  myBikeContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
    flex: 3,
  },
  myMarketContainer: {
    backgroundColor: 'white',
    width: '100%',
    flex: 2,
  },
  infoDetContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {
    marginTop: 10,
    flex: 3,
  },
  infoNameText: {
    fontFamily: 'SpoqaHanSansNeo-Megular',
    marginTop: '10%',
    marginLeft: '10%',
    fontSize: 20,
  },
  infoSIDText: {
    fontFamily: 'SpoqaHanSansNeo-Megular',
    marginLeft: '10%',
    fontSize: 15,
  },
  userImage: {
    height: '80%',
    width: '80%',
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  infoContainer: {
    flex: 3,
  },
  emailContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailText: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#003F5C',
  },
  rentSubTitleContainer: {
    width: '90%',
    padding: 10,
    marginLeft: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopWidth: 0.2,
    borderColor: '#666C69',
  },
  rentSubTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: 18,
    color: '#003F5C',
  },
  rentBtnContainer: {
    marginLeft: '5%',
  },
  rentBtn: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  rentText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: '#5E6461',
    fontSize: 16,
  },
  marketBtnContainer: {
    marginLeft: '5%',
    height: 40,
  },
  marketBtn: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  marketSubTitleContainer: {
    width: '90%',
    padding: 10,
    marginLeft: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopWidth: 0.2,
    borderColor: '#666C69',
  },
  marketSubTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: '#003F5C',
    fontSize: 18,
  },
});
