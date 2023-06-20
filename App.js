import { loadFonts } from './expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import MyStack from './src/Navigation/StackNavigation';
import MyTabs from './src/Navigation/TabNavigation';


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

// const isLoggedIn = false; 

  
  return (
 <NavigationContainer>
 
    <MyTabs />
    
    
  </NavigationContainer>
 );
}


