import useCart from '@/app/hooks/useCart';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, Text, View } from 'react-native';

const cart = () => {

    const { count, increment, decrement } = useCart();

    return (
        //<View className="items-center justify-center py-4 border-t border-gray-200" >
        <View className="items-center justify-center">


            <View className="flex-row items-center gap-4 mt-2" >
                <AntDesign name="shopping-cart" size={20} color="black" />
                <Pressable
                    onPress={decrement}
                    className="bg-gray-200 px-3 py-1 rounded-lg active:opacity-70"
                >
                    <Text className="text-sm font-work-black" > - </Text>
                </Pressable>

                < Text className="text-sm font-work-black min-w-[24px] text-center" >
                    {count}
                </Text>

                < Pressable
                    onPress={increment}
                    className="bg-gray-200 px-3 py-1 rounded-lg active:opacity-70"
                >
                    <Text className="text-sm font-work-black" > + </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default cart