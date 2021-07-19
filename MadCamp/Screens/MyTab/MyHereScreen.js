import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function MyHereScreen({navigation}) {
  return (
    <View>
      <Text>MyHere</Text>
    </View>
  );
}

export default MyHereScreen;
