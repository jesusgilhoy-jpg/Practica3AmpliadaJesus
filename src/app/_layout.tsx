// app/_layout.tsx
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import "./global.css";

// Mantener la pantalla de carga visible mientras cargan las fuentes
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
    return null; // O puedes retornar un componente de carga personalizado
  }

  // Ocultar la splash screen una vez que las fuentes están cargadas
  SplashScreen.hideAsync();

  return <Slot />;
};

export default RootLayout;