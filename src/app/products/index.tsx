import { Link } from 'expo-router';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../store/products.store';

const ProductsScreen = () => {
    return (
        <SafeAreaView className='flex flex-1 px-4'>
            <FlatList
                data={products}
                ListEmptyComponent={<Text>No hay productos</Text>}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='mt-1'>
                        <View>
                            <Image
                                source={require('../imagenes/cubo_de_mario.jpeg')}
                                className='w-16 h-16 mr-4 rounded-lg'
                                resizeMode='contain'
                            />
                        </View>
                        <Text className="text-2xl font-work-black">{item.title}</Text>
                        <Text className="">{item.description}</Text>
                        <View className='flex flex-row justify-between mt-1'>
                            <Text className='font-work-black'>{item.price}€</Text>
                            <Link href={`/products/${item.id}`} className='text-primary'>
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default ProductsScreen