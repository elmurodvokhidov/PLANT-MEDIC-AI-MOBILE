import { View, Text, ScrollView, Image, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index