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
      <Stack.Screen name="RentalMessages" component={Rentalmessages} />
      <Stack.Screen name="RentalChat" component={Rentalchat} />
    </Stack.Navigator>
  );
}
