import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BikeItem from '../../components/BikeItem';

export default function MarketDetailScreen({route, navigation}) {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.BackOut}>
          <TouchableOpacity
            style={styles.Back}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color={'#0C579F'} size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.TitleOut}>
          <Text style={styles.Title}> {route.params.itemTitle}</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.Context}>
          <View>
            <Image
              source={require('../../Image/b10.jpg')}
              style={styles.UploadImg}></Image>
          </View>
          <View style={styles.profileContainer}>
            <Text> {route.params.emailId}</Text>
          </View>
          <Icon
            //style={styles.icon}
            name={route.heartClick ? 'heart' : 'heart-outline'}
            color="#10569B"
            size={25}></Icon>
          <Text style={styles.TitleText}> {route.params.itemPrice}</Text>
          <Text style={styles.DetailText}> {route.params.itemDetail}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  Context: {
    backgroundColor: 'white',
    flexDirection: 'column',
    //padding: 20,
  },
  Header: {
    flexDirection: 'row',
  },
  BackOut: {
    flex: 1,
    height: 50,
  },
  Back: {
    height: '100%',
    //width: '40%',
    marginLeft: 10,
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  TitleOut: {
    flex: 2,
    height: 50,
  },
  Title: {
    height: '100%',
    width: '70%',
    marginTop: 15,
    //amarginLeft: 40,
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  ImgContent: {
    padding: 20,
  },
  UploadImg: {
    width: '100%',
    height: 360,
  },
  profileContainer: {
    padding: 20,
    flexDirection: 'row',
  },
  input: {
    height: 50,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
  },
  inputDetail: {
    height: 300,
    width: '100%',
    textAlignVertical: 'top',
  },
  TextContainer: {
    height: 50,
  },
  TitleText: {
    padding: 10,
    fontSize: 24,
  },
  DetailText: {
    padding: 20,
    fontSize: 20,
  },
});
