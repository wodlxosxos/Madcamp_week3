import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Rentalstack from './screens/Rentalstack';
import Dealstack from './screens/Dealstack';

const Tab = createMaterialTopTabNavigator();

export default function ChatScreen({route, navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        indicatorStyle: {backgroundColor: '#0C579F'},
        style: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="대여" component={Rentalstack} />
      <Tab.Screen name="거래" component={Dealstack} />
    </Tab.Navigator>
  );
}
