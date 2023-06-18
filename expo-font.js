import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'Open Sans': require('./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
      // Add more fonts if needed
  });
};
