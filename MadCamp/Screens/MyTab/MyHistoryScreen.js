import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyOnSaleScreen from './screens/MyOnSaleScreen';
import MySaleCompleteScreen from './screens/MySaleCompleteScreen';
import MyPurchaseCompleteScreen from './screens/MyPurchaseCompleteScreen';

const Tab = createMaterialTopTabNavigator();

function MyHistoryScreen({navigation}) {
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.header}>
        <View style={styles.BackOut}>
          <TouchableOpacity
            style={styles.Back}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color={'#003F5C'} size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleOut}>
          <Text style={styles.Title}>거래 내역</Text>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          indicatorStyle: {backgroundColor: '#0C579F'},
          style: {backgroundColor: 'white'},
        }}>
        <Tab.Screen name="판매 중" component={MyOnSaleScreen} />
        <Tab.Screen name="판매 완료" component={MySaleCompleteScreen} />
        <Tab.Screen name="구매 완료" component={MyPurchaseCompleteScreen} />
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
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#cfcfcf',
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
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'flex-start', //horizontal
    justifyContent: 'center', //vertical
  },
});

export default MyHistoryScreen;
