import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const about = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View>
                    <Text>about</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default about