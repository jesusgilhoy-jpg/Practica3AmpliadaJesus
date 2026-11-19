import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fbcfe8',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontFamily: 'WorkSans-Medium',
                },
                headerShadowVisible: true,
            }}
        >
            {/* Ocultamos el header en la pantalla de inicio raíz si redirige automáticamente */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            {/* Configuración automática o explícita para la carpeta products */}
            <Stack.Screen name="products" options={{ title: 'Productos' }} />
        </Stack>
    )
}

export default _layout