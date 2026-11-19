import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const cart = () => {

    const [count, setCount] = useState(0);

    const increment = () => (
        setCount(count + 1)
    )

    const decrement = () => (
        setCount(count - 1)
    )

    return (
        <View className="items-center justify-center py-4 border-t border-gray-200" >
            <AntDesign name="shopping-cart" size={24} color="black" />

            <View className="flex-row items-center gap-4 mt-2" >
                <Pressable
                    onPress={decrement}
                    className="bg-gray-200 px-3 py-1 rounded-lg active:opacity-70"
                >
                    <Text className="text-xl font-work-black" > - </Text>
                </Pressable>

                < Text className="text-xl font-work-black min-w-[24px] text-center" >
                    {count}
                </Text>

                < Pressable
                    onPress={increment}
                    className="bg-gray-200 px-3 py-1 rounded-lg active:opacity-70"
                >
                    <Text className="text-xl font-work-black" > + </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default cart