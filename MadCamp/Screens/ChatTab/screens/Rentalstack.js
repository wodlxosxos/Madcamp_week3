import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Rentalmessages from './Rentalmessages';
import Rentalchat from './Rentalchat';

const Stack = createStackNavigator();

export default function DealStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={Rentalmessages} />
      <Stack.Screen name="Chat" component={Rentalchat} />
    </Stack.Navigator>
  );
}
