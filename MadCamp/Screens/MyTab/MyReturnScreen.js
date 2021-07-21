import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function MyReturnScreen({ navigation }) {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
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
          <Text style={styles.Title}>자전거 반납하기</Text>
        </View>
      </View>
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

export default MyReturnScreen;
