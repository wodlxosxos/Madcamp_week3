import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default function MyScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.myInfoContainer}>
        <View style={styles.infoSubTitleContainer}>
          <Text style={styles.infoSubTitleText}>* 내정보</Text>
        </View>
        <View style={styles.infoDetContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.userImage}
              source={require('../../Images/default-user-image.png')}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoNameText}>이름 : 윤영훈</Text>
            <Text style={styles.infoSIDText}>학번 : 18</Text>
          </View>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>
            KAIST Email - fortest@kaist.co.kr
          </Text>
        </View>
      </View>
      <View style={styles.myBikeContainer}>
        <View style={styles.rentSubTitleContainer}>
          <Text style={styles.rentSubTitleText}>* 대여</Text>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity style={styles.rentBtn}>
            <Text style={styles.rentText}>내 자전거 관리</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity style={styles.rentBtn}>
            <Text style={styles.rentText}>대여 중인 자전거</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rentBtnContainer}>
          <TouchableOpacity style={styles.rentBtn}>
            <Text style={styles.rentText}>자전거 반납</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.myMarketContainer}>
        <View style={styles.marketSubTitleContainer}>
          <Text style={styles.marketSubTitleText}>* 마켓</Text>
        </View>
        <View style={styles.marketBtnContainer}>
          <TouchableOpacity style={styles.marketBtn}>
            <Text style={styles.rentText}>거래내역</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  myInfoContainer: {
    backgroundColor: 'white',
    marginTop: '1%',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    width: '97%',
    height: '20%',
    borderBottomWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: '#A2A7A5',
  },
  myBikeContainer: {
    backgroundColor: 'white',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    width: '97%',
    height: '43%',
    borderBottomWidth: 2,
    borderColor: '#A2A7A5',
  },
  myMarketContainer: {
    backgroundColor: 'white',
    marginLeft: '1.5%',
    marginRight: '1.5%',
    width: '97%',
    height: '23%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  infoDetContainer: {
    flexDirection: 'row',
    width: '92%',
    height: '50%',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: '1%',
    borderColor: '#E5EAE8',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 2,
    borderRadius: 20,
  },
  infoNameText: {
    fontFamily: 'SpoqaHanSansNeo-Megular',
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 20,
  },
  infoSIDText: {
    fontFamily: 'SpoqaHanSansNeo-Megular',
    marginLeft: '5%',
    fontSize: 15,
  },
  userImage: {
    height: '100%',
    width: '70%',
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  infoContainer: {
    flex: 3,
  },
  emailContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E5EAE8',
    borderBottomWidth: 1,
  },
  emailText: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
    color: '#69706D',
  },
  infoSubTitleContainer: {
    width: '95%',
    height: '15%',
    marginTop: '2%',
    marginLeft: '3%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#666C69',
  },
  infoSubTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: 'black',
  },
  rentSubTitleContainer: {
    width: '95%',
    height: '10%',
    marginTop: '2%',
    marginLeft: '3%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#666C69',
  },
  rentSubTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: 'black',
  },
  rentBtnContainer: {
    marginLeft: '5%',
    borderBottomWidth: 1,
    height: '19%',
    borderColor: '#E5EAE8',
  },
  rentBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  rentText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: '#5E6461',
    fontSize: 16,
  },
  marketBtnContainer: {
    marginLeft: '5%',
    borderBottomWidth: 1,
    height: '35%',
    borderColor: '#E5EAE8',
  },
  marketBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  marketSubTitleContainer: {
    width: '95%',
    height: '10%',
    marginTop: '4%',
    marginLeft: '3%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#666C69',
  },
  marketSubTitleText: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
    color: 'black',
    marginBottom: '3%',
  },
});
