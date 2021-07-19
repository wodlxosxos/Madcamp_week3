import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyBikeItem = ({items}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.bikeImage} source={require('../Image/b5.jpg')} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{items.itemTitle}</Text>
        <Text style={styles.priceText}>{items.itemPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    //borderLeftWidth: 1,
    paddingLeft: 10,
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
});

export default MyBikeItem;
