import { loadFonts } from './expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import MyStack from './src/Navigation/StackNavigation';
import MyTabs from './src/Navigation/TabNavigation';

import 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

// const isLoggedIn = false; 

  
  return (
 <NavigationContainer>
     <MyTabs />
    {/* {Animated.initializeReanimated()} */}
  </NavigationContainer>
  
 );
}


