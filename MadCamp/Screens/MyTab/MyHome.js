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
import MyBikeScreen from './MyBikeScreen';
import MyRentBikeScreen from './MyRentBikeScreen';
import MyReturnScreen from './MyReturnScreen';
import MyHistoryScreen from './MyHistoryScreen';

const signStack = createStackNavigator();

function MyHome({navigation}) {
  return (
    <signStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyScreen">
      <signStack.Screen name="MyScreen" component={MyScreen} />
      <signStack.Screen name="MyBike" component={MyBikeScreen} />
      <signStack.Screen name="MyRentBike" component={MyRentBikeScreen} />
      <signStack.Screen name="MyReturn" component={MyReturnScreen} />
      <signStack.Screen name="MyHistory" component={MyHistoryScreen} />
    </signStack.Navigator>
  );
}

export default MyHome;
