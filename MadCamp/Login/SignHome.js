import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const signStack = createStackNavigator();

function SignHome({navigation}) {
  return (
    <signStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="로그인">
      <signStack.Screen name="로그인" component={SignIn} />
      <signStack.Screen name="회원가입" component={SignUp} />
    </signStack.Navigator>
  );
}

export default SignHome;
