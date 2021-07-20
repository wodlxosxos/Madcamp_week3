import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

function SignIn({navigation}) {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>UBD</Text>
      <Text style={styles.smalllogo}>at KAIST</Text>
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
            navigation.replace('Main', {
              user_id: userId,
              user_password: userPassword,
            });
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
              .then(res => {
                if (res.status === 200) {
                  navigation.replace('Main', {
                    user_id: userId,
                    user_password: userPassword,
                  });
                } else if (res.status === 400) {
                  ToastAndroid.showWithGravity(
                    '잘못된 ID입니다.',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
                } else {
                  ToastAndroid.showWithGravity(
                    '잘못된 Password입니다.',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  );
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
    backgroundColor: '#003F5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
    //marginBottom: 40,
  },
  smalllogo: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
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
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '20%',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  loginText: {
    color: 'white',
  },
  signInUp: {
    flexDirection: 'row',
  },
});

export default SignIn;
