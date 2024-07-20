import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
    return (
        <SafeAreaView className="h-screen bg-primary">
            <ScrollView>
                <View>
                    <Text>Cart</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Cart