import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import MarketDetailScreen from '../MarketTab/MarketDetailScreen';

const signStack = createStackNavigator();

function MyHome({ navigation, route }) {
  const { user_id, user_name } = route.params;
  console.log(route);
  return (
    <signStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MyScreen">
      <signStack.Screen
        name="MyScreen"
        initialParams={{
          user_id: user_id,
          user_name: user_name,
        }}
        component={MyScreen}
      />
      <signStack.Screen name="MyBike" component={MyBikeScreen} />
      <signStack.Screen name="MyRentBike" component={MyRentBikeScreen} />
      <signStack.Screen name="MyReturn" component={MyReturnScreen} />
      <signStack.Screen name="MyHistory" component={MyHistoryScreen} />
      <signStack.Screen name="디테일" component={MarketDetailScreen} />
    </signStack.Navigator>
  );
}

export default MyHome;
