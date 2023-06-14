import { View, Text } from 'react-native'
import React from 'react'
import PhoneSignIn from '../Admin/PhoneSignIn'
import EmailSignInScreen from '../Admin/EmailSignInScreen'
import OtpScreen from '../Admin/OtpScreen'
import SignUp from '../Admin/SignUp'
import DashboardScreen from '../Admin/DashboardScreen'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardPaymentDetailed from '../Admin/DashboardPaymentDetailed'

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
  </Stack.Navigator>
  )
}


export default MyStack