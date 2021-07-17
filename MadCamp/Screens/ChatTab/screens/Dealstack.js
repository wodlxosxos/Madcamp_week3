import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Dealmessages from './Dealmessages';
import Dealchat from './Dealchat';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

export default function DealStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={Dealmessages} />
      <Stack.Screen name="Chat" component={Dealchat} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderBottomWidth: 20,
    color: '#AAAAAA',
  },
});
