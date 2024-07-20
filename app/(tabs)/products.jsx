import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductsData } from '../../config/productsData'
import { AntDesign } from '@expo/vector-icons'

const Products = () => {
    return (
        <SafeAreaView className="h-screen bg-primary">
            <ScrollView>
                <View className="flex-row flex-wrap gap-8 justify-center pb-14">
                    {
                        ProductsData.map(product => (
                            <View key={product.id} className="w-40 rounded-md shadow-lg items-center pb-2 bg-white">
                                <Image
                                    source={product.imgUrl}
                                    alt={product.name}
                                    resizeMode='cover'
                                    className="w-40 h-44 rounded-t-md" x
                                />
                                <Text className="text-lg mt-2">{product.name}</Text>
                                <Text className="text-sm mt-2">{product.description.length > 25 ? product.description.slice(0, 25) + "..." : product.description}</Text>
                                <View className="flex-row items-start gap-x-4 mt-4">
                                    <Text className="text-xl">{product.price}$</Text>
                                    <View className="flex-row items-center gap-x-2">
                                        <TouchableOpacity>
                                            <AntDesign name="minuscircle" size={24} color="green" />
                                        </TouchableOpacity>
                                        <Text className="text-xl">0</Text>
                                        <TouchableOpacity>
                                            <AntDesign name="pluscircle" size={24} color="green" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Products