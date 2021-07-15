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
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>엄복동</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ID..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signInUp}>
        <TouchableOpacity
          id="loginBtn"
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Main')}>
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
