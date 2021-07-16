import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Rental from './screens/rental';
import Deal from './screens/deal';

const Tab = createMaterialTopTabNavigator();

export default function ChatScreen({route, navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        indicatorStyle: {backgroundColor: 'white'},
        style: {backgroundColor: '#0C579F'},
      }}>
      <Tab.Screen name="대여" component={Rental} />
      <Tab.Screen name="거래" component={Deal} />
    </Tab.Navigator>
  );
}
