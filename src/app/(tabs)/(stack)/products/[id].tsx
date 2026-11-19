import { Redirect, useLocalSearchParams } from 'expo-router';
import { Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../../../store/products.store';


const ProductsScreen = () => {

    const { id } = useLocalSearchParams();

    const product = products.find(p => p.id === id);
    if (!product) {
        return <Redirect href={'/products'} />
    }

    return (
        <SafeAreaView className='px-5 mt-2'>
            <Image
                source={product.image}
                className='w-16 h-16 mr-4 rounded-lg'
                resizeMode='contain'
            />
            <Text className="font-work-black text-2xl" >{product.title}</Text>
            <Text className="">{product.description}</Text>
            <Text className="font-work-black text-2xl">{product.price}</Text>
        </SafeAreaView>
    )
}

export default ProductsScreen