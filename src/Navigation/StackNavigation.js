import React from 'react'
import PhoneSignIn from '../Admin/PhoneSignIn'
import EmailSignInScreen from '../Admin/EmailSignInScreen'
import OtpScreen from '../Admin/OtpScreen'
import SignUp from '../Admin/SignUp'
import DashboardScreen from '../Admin/DashboardScreen'
import DashboardPaymentDetailed from '../Admin/DashboardPaymentDetailed'
import ClientScreen from '../Admin/ClientScreen'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../Admin/DetailScreen'
import ClientProfile from '../Admin/ClientProfile'
import ChatList from '../TabNavigation component/ChatList'
import Icon from 'react-native-vector-icons/FontAwesome';
import AddGroup from '../Admin/AddGroup'
import AdminChat from '../Admin/AdminChat'
import MyTabs from './TabNavigation'
import AdminGroupsChats from '../Admin/AdminGroupsChats'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
    
     <Stack.Screen name='EmailSignIn' component={EmailSignInScreen} />
       <Stack.Screen name='PhoneSignIn' component={PhoneSignIn} />
      <Stack.Screen name='OtpScreen' component={OtpScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Dashboard' component={DashboardScreen} />
      <Stack.Screen name='PaymentDetail' component={DashboardPaymentDetailed} />
      <Stack.Screen name='Client' component={ClientScreen} />
      <Stack.Screen name='ClientDetail' component={DetailScreen} />
      <Stack.Screen name='ClientProfile' component={ClientProfile} />
      <Stack.Screen name='Chat' component={ChatList} options={{
          headerRight: () => (
            <React.Fragment>
              <Icon
                name="search"
                size={24}
                style={{ marginRight: 15 }}
                onPress={() => {
                  // Handle search icon press
                }}
              />
              <Icon
                name="user-plus"
                size={24}
                style={{ marginRight: 15 }}
                onPress={() => {
                  // Handle users plus icon press
                  navigation.navigate('Add Groups')
                }}
              />
            </React.Fragment>
          ),
        }}
        />
        <Stack.Screen name='Add Groups' component={AddGroup}   options={{
          headerRight: () => (
            <Icon
              name="search"
              size={24}
              style={{ marginRight: 15 }}
              onPress={() => {
                // Handle search icon press
                // navigation.navigate('Add Groups')
              }}
            />
          ),
        }}
        />
        <Stack.Screen name='Chat List' component={AdminChat} options={{headerShown: false}} />
        <Stack.Screen name='Group Chats' component={AdminGroupsChats} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}



export default MyStack