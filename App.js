import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './src/Navigation/TabNavigation'
import { loadFonts } from './expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation'
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

// const isLoggedIn = false; 

  
  return (
    <NavigationContainer>
    <StackNavigation />
      {/* <TabNavigation />
    </StackNavigation> */}
  </NavigationContainer>
  );
}


