import { Link } from 'expo-router';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../store/products.store';

const ProductsScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-white px-4' edges={['bottom']}>
            <FlatList
                data={products}
                ListEmptyComponent={<Text>No hay productos</Text>}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View className='h-[1px] bg-gray-200 my-1' />
                )}
                renderItem={({ item }) => (
                    <View className='flex-row items-center py-3'>
                        {/* Imagen del producto a la izquierda */}
                        <Image
                            source={require('../imagenes/cubo_de_mario.jpeg')}
                            className='w-16 h-16 mr-4 rounded-lg'
                            resizeMode='contain'
                        />

                        {/* Contenedor derecho con la información */}
                        <View className='flex-1'>
                            <Text className='text-xl font-work-black text-black'>
                                {item.title}
                            </Text>

                            {/* numberOfLines={2} corta el texto con "..." igual que en la imagen */}
                            <Text
                                numberOfLines={2}
                                className='text-gray-600 text-sm mt-0.5 leading-5'
                            >
                                {item.description}
                            </Text>

                            <View className='flex-row justify-between items-center mt-2'>
                                <Text className='font-work-black text-base text-black'>
                                    {item.price}€
                                </Text>
                                <Link
                                    href={`/products/${item.id}`}
                                    className='text-indigo-700 underline text-sm'
                                >
                                    Ver detalles
                                </Link>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default ProductsScreen;