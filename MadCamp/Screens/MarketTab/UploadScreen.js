import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UploadScreen({route, navigation}) {
  return (
    <View style={styles.Out}>
      <View style={styles.Up}>
        <TouchableOpacity
          style={styles.Back}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" color={'#0C579F'} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Out: {
    flex: 10,
  },
  Up: {
    height: 50,
    flexDirection: 'row',
  },
  Back: {
    height: '100%',
    //borderWidth: 1,
    width: '17%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  Chat: {
    flex: 100,
  },
});
