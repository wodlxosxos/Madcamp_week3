import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignHome from './Login/SignHome';
import ChatScreen from './Screens/ChatTab/ChatScreen';
import MarketScreen from './Screens/MarketTab/MarketScreen';
import MyHome from './Screens/MyTab/MyHome';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screens/HomeTab/HomeScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MainScreen({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator
        initialRouteName="Home"
        backBehavior="none"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'repeat' : 'repeat-outline';
            } else if (route.name === 'My') {
              iconName = focused ? 'bicycle' : 'bicycle-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={'#0C579F'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
        }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Market" component={MarketScreen} />
        <Tabs.Screen name="Chat" component={ChatScreen} />
        <Tabs.Screen name="My" component={MyHome} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Sign">
          <Stack.Screen name="Sign" component={SignHome} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
