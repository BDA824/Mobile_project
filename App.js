import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Montserrat-Regular': require('./assets/Fonts/Montserrat-Regular.ttf'),
      'Montserrat-Bold': require('./assets/Fonts/Montserrat-Bold.ttf'),
      'Montserrat-Light': require('./assets/Fonts/Montserrat-Light.ttf'),
      'Roboto-Thin': require('./assets/Fonts/Roboto-Thin.ttf'),
      'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Navigation />
  );
}
