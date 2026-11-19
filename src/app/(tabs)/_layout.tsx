import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: {
                backgroundColor: "lightblue",
            }
        }}>

            <Tabs.Screen
                name='products/index'
                options={{
                    title: 'productos'

                }}
            />
            <Tabs.Screen />
        </Tabs>
    )
}

export default _layout