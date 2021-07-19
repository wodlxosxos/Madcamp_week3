import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';

function SignUp({navigation}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [userSID, setUserSID] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>Email : </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter KAIST Email without domain"
            placeholderTextColor="#003F5C"
            onChangeText={text => setUserEmail(text)}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>PW : </Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="#003F5C"
            onChangeText={text => setUserPW(text)}
          />
        </View>
      </View>
      <View style={styles.signInputView}>
        <Text style={styles.signInputText}>StudentID : </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter StudentID"
            placeholderTextColor="#003F5C"
            onChangeText={text => setUserSID(text)}
          />
        </View>
      </View>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.signUpBtn}
          onPress={() => {
            if (userPW === '' || userEmail === '' || userSID === '') {
              ToastAndroid.showWithGravity(
                '입력되지 않은 정보가 존재합니다.',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
              console.log('chk');
            } else {
              fetch(
                `https://api.trumail.io/v2/lookups/json?email=${userEmail}@kaist.ac.kr`,
              )
                .then(response => response.json())
                .then(json => {
                  console.log(json);
                  if (json.deliverable) {
                    fetch('http://192.249.18.122:80/signUp', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        user_id: userEmail,
                        user_password: userPW,
                        user_SID: userSID,
                      }),
                    })
                      .then(res => {
                        if (res.status === 200) {
                          ToastAndroid.showWithGravity(
                            '회원가입이 완료되었습니다.',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                          );
                          navigation.goBack();
                        } else {
                          ToastAndroid.showWithGravity(
                            '이미 회원가입이 완료된 이메일 입니다.',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                          );
                        }
                      })
                      .catch(error => console.log('error', error));
                  } else {
                    ToastAndroid.showWithGravity(
                      '존재하지 않는 KAIST Email 입니다.',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                    );
                  }
                })
                .catch(error => {
                  console.error(error);
                });
            }
          }}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.signUpBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
  inputView: {
    width: '60%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    height: 20,
    justifyContent: 'center',
    marginRight: '15%',
    padding: 20,
  },
  inputText: {
    height: 40,
    color: 'black',
    fontSize: 12,
  },
  signUpBtn: {
    width: '20%',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  loginText: {
    color: 'black',
    fontWeight: '700',
  },
  signInUp: {
    flexDirection: 'row',
  },
  signInputView: {
    flexDirection: 'row',
    marginBottom: 15,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  signInputText: {
    fontSize: 14,
    alignSelf: 'center',
  },
});
export default SignUp;
