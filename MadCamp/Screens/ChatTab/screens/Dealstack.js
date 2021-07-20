import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Dealmessages from './Dealmessages';
import Dealchat from './Dealchat';

const Stack = createStackNavigator();

export default function DealStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DealMessages" component={Dealmessages} />
      <Stack.Screen name="DealChat" component={Dealchat} />
    </Stack.Navigator>
  );
}
