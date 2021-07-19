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

function MyReturnScreen({navigation}) {
  return (
    <View>
      <Text>반납 창</Text>
    </View>
  );
}

export default MyReturnScreen;
