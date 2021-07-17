import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BikeItem = ({items}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.bikeImage} source={require('../Image/b10.jpg')} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{items.itemTitle}</Text>
        <Text style={styles.priceText}>{items.itemPrice}</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => alert('저장되었습니다')}>
          <Icon
            //style={styles.icon}
            name="heart-outline"
            color="#003F5C"
            size={25}></Icon>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    //marginTop: 10,
    //borderWidth: 0.17,
    //marginHorizontal: 10,
    //borderRadius: 15,
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
  icon: {
    padding: 10,
  },
  iconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 35,
  },
});

export default BikeItem;
