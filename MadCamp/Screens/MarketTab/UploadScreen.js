import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UploadScreen({route, navigation}) {
  const [titletext, onChangeTitle] = React.useState(null);
  const [detailtext, onChangeDetail] = React.useState(null);
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

        <View style={styles.TitleOut}>
          <Text style={styles.Title}>판매 상품 등록</Text>
        </View>

        <View style={styles.CompleteOut}>
          <TouchableOpacity
            style={styles.Complete}
            onPress={() => {
              console.log(titletext);
              fetch('http://192.249.18.131:80/marketreg', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  item_title: titletext,
                  item_price: number,
                  item_detail: detailtext,
                  item_heart: false,
                  mkType: 'none',
                }),
              })
                .then(res => {
                  if (res.status === 200) {
                    ToastAndroid.show('success', ToastAndroid.SHORT);
                  } else {
                    ToastAndroid.show('fail', ToastAndroid.SHORT);
                  }
                })
                .catch(error => console.log('error', error));

              navigation.goBack();
            }}>
            <Text style={styles.Completetext}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.Context}>
          <TouchableOpacity style={styles.ImgContent}>
            <Image
              source={require('../../Image/camera.jpg')}
              style={styles.UploadImg}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={titletext}
            placeholder="글 제목을 입력하세요"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="₩ 가격을 입력하세요 "
            keyboardType="numeric"
          />
          <TextInput
            style={styles.inputDetail}
            onChangeText={onChangeDetail}
            value={detailtext}
            placeholder="게시글 내용을 작성하세요"
            multiline={true}
          />
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
    padding: 20,
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
    width: '50%',
    //marginLeft: 10,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  TitleOut: {
    flex: 1,
    height: 50,
  },
  Title: {
    height: '100%',
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
    fontSize: 16,
    color: '#003F5C',
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
    width: '40%',
    marginTop: 8,
    marginRight: 10,
    backgroundColor: '#10569B',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 18,
  },
  Completetext: {
    color: 'white',
    fontSize: 15,
  },
  ImgContent: {
    padding: 20,
  },
  UploadImg: {
    width: 100,
    height: 100,
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
});
