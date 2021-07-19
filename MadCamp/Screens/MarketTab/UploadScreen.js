import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Items = [
  {
    id: '1',
    uploadName: 'Jenny Doe',
    uploadImg: require('../../Image/b1.jpg'),
  },
];

export default function UploadScreen({route, navigation}) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

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

        <View style={styles.CompleteOut}>
          <TouchableOpacity
            style={styles.Complete}
            onPress={() => navigation.goBack()}>
            <Text style={styles.Completetext}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.UploadImgWrapper}>
          <Image
            source={require('../../Image/b1.jpg')}
            style={styles.UploadImg}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
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
    width: '17%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  CompleteOut: {
    flex: 1,
    height: 50,
    alignItems: 'flex-end',
  },
  Complete: {
    height: '70%',
    width: '30%',
    //borderWidth: 1,
    marginTop: 10,
    //marginLeft: 295,
    marginRight: 5,
    backgroundColor: '#10569B',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Completetext: {
    color: 'white',
    fontSize: 15,
  },
  UploadImgWrapper: {
    //marginTop: 50,
  },
  UploadImg: {
    width: 235,
    height: 235,
  },
  input: {
    height: 40,
    borderWidth: 0.2,
  },
});
