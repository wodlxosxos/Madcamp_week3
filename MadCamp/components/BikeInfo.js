import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

const BikeInfo = ({ items, navigation, info }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}>
      <Modal
        style={{ width: '90%', height: '90%' }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.titleText}>자전거 정보</Text>
          </View>
          <View style={styles.restContainer}>
            <View style={styles.modalBikeContainer}>
              <Image
                style={styles.modalBikeImage}
                source={require('../Images/bicycle_img.jpg')}
              />
            </View>
            <View style={styles.mainModalContainer}>
              <View style={styles.mainModalTitle}>
                <Text style={styles.mainModalTitleText}>
                  자전거 및 소유자 정보
                </Text>
              </View>
              <Text style={styles.mainModalText}>이름 : {items.userName}</Text>
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
            <View style={styles.resBtnContainer}>
              <TouchableOpacity
                style={styles.resBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>대여</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.resBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Image
        style={styles.bikeImage}
        source={require('../Images/bicycle_img.jpg')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          이름 : {items.userName} ({items.userGender})
        </Text>
        <Text style={styles.nameText}>학번 : {items.userSID}</Text>
        <Text style={styles.nameText}>평점 : {items.rating}</Text>
        <Text style={styles.nameText}>
          시간당: {items.hourFee} 원 / 일당: {items.dayFee} 원
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    //borderWidth: 1,
    //borderRadius: 15,
    flexDirection: 'row',
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
  nameText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  modalContainer: {
    backgroundColor: '#10569B',
    marginBottom: 5,
    //marginTop: 5,
    height: '100%',
    width: '100%',
    //height: '91%',
    //width: '96%',
    //borderWidth: 2,
    borderRadius: 35,
    alignSelf: 'center',
  },
  modalTitle: {
    height: '8%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //borderBottomWidth: 1,
  },
  titleText: {
    color: 'white',
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
  resBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10569B',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
});

export default BikeInfo;
