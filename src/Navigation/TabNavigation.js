import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../TabNavigation component/Home';
import Profile from '../TabNavigation component/Profile';
import Notification from '../TabNavigation component/Notification';
import ChatList from '../TabNavigation component/ChatList';
import { useNavigation } from '@react-navigation/native';
import MyStack from './StackNavigation';



const Tab = createBottomTabNavigator();

function MyTabs() {

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'envelope' : 'envelope';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'bell' : 'bell';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
           <Tab.Screen name="Stack" component={MyStack}  options={{headerShown: false}}/>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Chat"
        component={ChatList}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Chat');
          },
        }}
        
      />
      <Tab.Screen name='Notification' component={Notification} />
    </Tab.Navigator>
  );
}

function getTabBarVisibility(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : '';

  if (routeName === 'EmailSignIn' || routeName === 'PhoneSignIn' || routeName === 'OtpScreen' || routeName === 'SignUp') {
    return false; // Hide tab bar for Profile and Settings screens
  }

  return true; // Show tab bar for all other screens
}

export default MyTabs;
