import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BikeInfo = ({items, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('HomeBike')}>
      <Image
        style={styles.bikeImage}
        source={require('../Images/base_bicycle_img.jpg')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>
          이름 : {items.userName} ({items.userGender})
        </Text>
        <Text style={styles.nameText}>학번 : {items.userID}</Text>
        <View style={styles.feeContainer}>
          <View style={styles.feeHour}>
            <Text style={styles.nameText}>시간당 : {items.hourFee}</Text>
          </View>
          <View style={styles.feeDay}>
            <Text style={styles.nameText}>하루당 : {items.dayFee}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
  },
  bikeImage: {
    width: 90,
    height: 90,
  },
  infoContainer: {
    margin: 5,
    borderLeftWidth: 1,
    paddingLeft: 5,
    height: '90%',
    width: '100%',
  },
  nameText: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  feeContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    height: 40,
    width: '70%',
  },
  feeHour: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  feeDay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
  },
});

export default BikeInfo;
