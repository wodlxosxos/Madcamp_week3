import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyScreen from './MyScreen';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const signStack = createStackNavigator();

function MyHome({navigation}) {
  return (
    <signStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyScreen">
      <signStack.Screen name="MyScreen" component={MyScreen} />
    </signStack.Navigator>
  );
}

export default MyHome;
