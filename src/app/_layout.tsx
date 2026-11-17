// app/_layout.tsx
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import "./global.css";


//Importamos la variable con las fuentes y la variable con el posible error de carga
const [fontsLoaded, error] = useFonts({
  'WorkSans-Black': require('../../assets/fonts/WorkSans-Black.ttf'),
  'WorkSans-Light': require('../../assets/fonts/WorkSans-Light.ttf'),
  'WorkSans-Medium': require('../../assets/fonts/WorkSans-Medium.ttf'),
});

const RootLayout = () => {



  return <Slot />;
}
export default RootLayout;