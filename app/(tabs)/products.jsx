import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Products = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View>
                    <Text>Products</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Products