import { View, Text } from 'react-native'
import React from 'react'
import PhoneSignIn from '../Admin/PhoneSignIn'
import EmailSignInScreen from '../Admin/EmailSignInScreen'
import OtpScreen from '../Admin/OtpScreen'
import SignUp from '../Admin/SignUp'
import DashboardScreen from '../Admin/DashboardScreen'
import DashboardPaymentDetailed from '../Admin/DashboardPaymentDetailed'
import ClientScreen from '../Admin/ClientScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../Admin/DetailScreen'


const Stack = createNativeStackNavigator();

const MyStack = () => {
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
  </Stack.Navigator>
  )
}


export default MyStack