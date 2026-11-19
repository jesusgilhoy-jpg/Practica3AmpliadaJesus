// src/app/_layout.tsx
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "./global.css";


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../../assets/fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  // Reemplazamos <Slot /> por <Stack /> para tener navegación con cabecera en toda la app
  return (
    <Stack />
  );
};

export default RootLayout;