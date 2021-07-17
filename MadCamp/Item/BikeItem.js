import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BikeItem = ({items}) => {
  const [heart, setHeart] = useState(false);
  useEffect(() => {
    //클릭 시에만 되게 조건 주기
    items.heartClick = !items.heartClick;
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.bikeImage} source={require('../Image/b10.jpg')} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{items.itemTitle}</Text>
        <Text style={styles.priceText}>{items.itemPrice}</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setHeart(!heart)}>
          <Icon
            //style={styles.icon}
            name={items.heartClick ? 'heart' : 'heart-outline'}
            color="#10569B"
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
