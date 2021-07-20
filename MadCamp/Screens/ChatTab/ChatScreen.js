import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Rentalstack from './screens/Rentalstack';
import Dealstack from './screens/Dealstack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ChatScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>채팅</Text>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          indicatorStyle: {backgroundColor: '#0C579F'},
          style: {backgroundColor: 'white'},
        }}>
        <Tab.Screen name="대여" component={Rentalstack} />
        <Tab.Screen name="거래" component={Dealstack} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
  },
  headerText: {
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
  BackOut: {
    height: 50,
  },
  Back: {
    height: '100%',
    width: '100%',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
  TitleOut: {
    height: 50,
  },
  Title: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
});
