import { View, Text, Platform } from 'react-native'
import {useState} from 'react';
import Home from '../User/Home';
import Profile from '../User/Profile';
import Message from '../User/Message';
import Notification from '../User/Notification';
import Icon from 'react-native-vector-icons/FontAwesome';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  var [bgColor, setBgColor] = useState('');
  var [position, setPosition] = useState('relative');

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        } else if (route.name === 'Message') {
          iconName = focused ? 'envelope' : 'envelope';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'bell' : 'bell';
        }
         return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name='Notification' component={Notification} />
    </Tab.Navigator>
  );
}

export default MyTabs;