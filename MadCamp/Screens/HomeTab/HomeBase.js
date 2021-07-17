import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeBike from './HomeBike';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const signStack = createStackNavigator();

function HomeBase({navigation}) {
  return (
    <signStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeMain">
      <signStack.Screen name="HomeMain" component={HomeScreen} />
      <signStack.Screen name="HomeBike" component={HomeBike} />
    </signStack.Navigator>
  );
}

export default HomeBase;
