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
            placeholder="Enter KAIST Emial"
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
            secureTextEntry
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
          onPress={() => navigation.goBack()}>
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
