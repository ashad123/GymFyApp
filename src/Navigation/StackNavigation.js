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
import TabNavigation from './TabNavigation'
import AdminGroupsChats from '../Admin/AdminGroupsChats'
import AdminMoreOption from '../Admin/AdminMoreOption'
import AdminMoreWallpapaer from '../Admin/AdminMoreWallpapaer'
import AdminSendAlert from '../Admin/AdminSendAlert'
import AdminAddClient from '../Admin/AdminAddClient'
import AdminLeadScreen from '../Admin/AdminLeadScreen'
import AdminAddLeadScreen from '../Admin/AdminAddLeadScreen'
import AdminLeadDetailScreen from '../Admin/AdminLeadDetailScreen'
import AdminPostScreen from '../Admin/AdminPostScreen'
import AdminNotificationScreen from '../Admin/AdminNotificationScreen'
import AdmiNotificationDetailedScreen from '../Admin/AdmiNotificationDetailedScreen'
import AdminGroupListScreen from '../Admin/AdminGroupListScreen'
import AdminAddNewGroup from '../Admin/AdminAddNewGroup'
import AdminAddYourGroupChatScreen from '../Admin/AdminAddYourGroupChatScreen'
import AdminAddUserourGroupChatScreen from '../Admin/AdminAddUserourGroupChatScreen'
import AdminUserListScreen from '../Admin/AdminUserListScreen'
import AdminInviteUsersScreen from '../Admin/AdminInviteUsersScreen'
import UserInviteScreen from '../User/UserInviteScreen'
import Profile from '../TabNavigation component/Profile'
import UserAcceptInviteScreen from '../User/UserAcceptInviteScreen'
import UserSignInScreen from '../User/UserSignInScreen'
import UserEmailSignInScreen from '../User/UserEmailSignInScreen'
import UserOTPScreen from '../User/UserOTPScreen'
import UserDashboardScreen from '../User/UserDashboardScreen'
import UserYourGroupsScreen from '../User/UserYourGroupsScreen'
import UserPackagePlanScreen from '../User/UserPackagePlanScreen'
import UserProfileScreen from '../User/UserProfileScreen'
import UserNotificationScreen from '../User/UserNotificationScreen'
import UserChatlisting from '../User/UserChatlisting'
import UserChatScreen from '../User/UserChatScreen'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
    
     <Stack.Screen name='EmailSignIn' component={EmailSignInScreen} options={{headerShown: false}} />
       <Stack.Screen name='PhoneSignIn' component={PhoneSignIn} />
      <Stack.Screen name='OtpScreen' component={OtpScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Dashboard'>
        {() => (
          <>
         
         <DashboardScreen />
         {/* <TabNavigation/> */}
         </>
               )}
      </Stack.Screen>
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
        <Stack.Screen name='More Option' component={AdminMoreOption} options={{headerShown: false}} /> 
        <Stack.Screen name='Wallpapers' component={AdminMoreWallpapaer} options={{headerShown: false}} /> 
        <Stack.Screen name='Send Alert' component={AdminSendAlert} options={{headerShown: false}} /> 
        <Stack.Screen name='Add Client' component={AdminAddClient} options={{headerShown: false}} />
        <Stack.Screen name='Admin Leads' component={AdminLeadScreen} options={{headerShown: false}} />
        <Stack.Screen name='Admin Add Leads' component={AdminAddLeadScreen} options={{headerShown: false}} />
        <Stack.Screen name='Admin Lead Detail' component={AdminLeadDetailScreen} options={{headerShown: false}} />
        <Stack.Screen name='Admin Post' component={AdminPostScreen} options={{headerShown: false}} />
        <Stack.Screen name='Admin Notification' component={AdminNotificationScreen} options={{headerShown: false}} />
        <Stack.Screen name='Admin Notification Detailed' component={AdmiNotificationDetailedScreen} options={{headerShown: false}} />
        <Stack.Screen name='Group List' component={AdminGroupListScreen} options={{headerShown: false}} />
        <Stack.Screen name='Add New Group' component={AdminAddNewGroup} options={{headerShown: false}} />
        <Stack.Screen name='Add Your Group Chat' component={AdminAddYourGroupChatScreen} options={{headerShown: false}} />
        <Stack.Screen name='Add User Your Group Chat' component={AdminAddUserourGroupChatScreen} options={{headerShown: false}} />
        <Stack.Screen name='User List Screen' component={AdminUserListScreen} options={{headerShown: false}} />
        <Stack.Screen name='Invite Users Screen' component={AdminInviteUsersScreen} options={{headerShown: false}} />
  
  {/* user Screen */}
 
 <Stack.Screen name='Accept Invite'  options={{headerShown: false}}>
 {() => (
          <>
            
            <UserAcceptInviteScreen />
          </>
        )}
 </Stack.Screen>
  {/* <Stack.Screen name='User SignIn' component={UserSignInScreen} options={{headerShown: false}} /> */}
  <Stack.Screen name='User Sign-In' component={UserSignInScreen} options={{headerShown: false}} />
 <Stack.Screen name='Email SignIn' component={UserEmailSignInScreen} options={{headerShown: false}} />
 <Stack.Screen name='Otp Screen' component={UserOTPScreen} options={{headerShown: false}} />
 <Stack.Screen name='User Dashboard' component={UserDashboardScreen} options={{headerShown: false}} />
 <Stack.Screen name='User Your Groups' component={UserYourGroupsScreen} options={{headerShown: false}} />
 <Stack.Screen name='User Package Plan' component={UserPackagePlanScreen} options={{headerShown: false}} />
 <Stack.Screen name='User Profile' component={UserProfileScreen} options={{headerShown: false}} />
<Stack.Screen name='User Notification' component={UserNotificationScreen} options={{headerShown: false}} />
<Stack.Screen name='User Chat listing' component={UserChatlisting} options={{headerShown: false}} />
<Stack.Screen name='User Chat Screen' component={UserChatScreen} options={{headerShown: false}}  />

  </Stack.Navigator>
  )
}



export default MyStack