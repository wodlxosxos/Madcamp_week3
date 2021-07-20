import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

function SignIn({ navigation }) {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>엄복동</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ID..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setUserId(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setUserPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="loginBtn"
          style={styles.loginBtn}
          onPress={() => {
            fetch('http://192.249.18.122:80/signIn', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_id: userId,
                user_password: userPassword,
              }),
            })
              .then(res => res.json())
              .then(json => {
                if (json.user_name === "Wrong ID") {
                  ToastAndroid.showWithGravity(
                    '잘못된 ID입니다.',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
                } else if (json.user_name === "Wrong PW") {
                  ToastAndroid.showWithGravity(
                    '잘못된 Password입니다.',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
                } else {
                  console.log('replace to main');
                  navigation.replace('Main', {
                    user_id: userId,
                    user_name: json.user_name,
                  });
                }
              })
              .catch(error => console.log('error', error));
          }}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="signUpBtn"
          style={styles.loginBtn}
          onPress={() => navigation.navigate('회원가입')}>
          <Text style={styles.loginText}>Sign Up</Text>
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
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '20%',
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
  },
  signInUp: {
    flexDirection: 'row',
  },
});

export default SignIn;
