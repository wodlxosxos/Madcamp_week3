import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MarketDeal from './MarketDeal';
import UploadScreen from './UploadScreen';

const marketStack = createStackNavigator();

export default function MarketScreen({route, navigation}) {
  return (
    <marketStack.Navigator screenOptions={{headerShown: false}}>
      <marketStack.Screen name="마켓" component={MarketDeal} />
      <marketStack.Screen name="업로드" component={UploadScreen} />
    </marketStack.Navigator>
  );
}
