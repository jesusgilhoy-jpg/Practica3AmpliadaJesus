// src/app/_layout.tsx
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router'; // <--- Cambiamos Slot por Stack
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
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fbcfe8', // Color rosa (equivalente a bg-pink-200) para las cabeceras
        },
        headerTintColor: '#000', // Color negro para la flecha y el texto del título
        headerTitleStyle: {
          fontFamily: 'WorkSans-Medium',
        },
        headerShadowVisible: false, // Opcional: elimina la línea divisoria inferior
      }}
    >
      {/* Ocultamos el header en la pantalla de inicio raíz si redirige automáticamente */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Configuración automática o explícita para la carpeta products */}
      <Stack.Screen name="products" options={{ title: 'Productos' }} />
    </Stack>
  );
};

export default RootLayout;