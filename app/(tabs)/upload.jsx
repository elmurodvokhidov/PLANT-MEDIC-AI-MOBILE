import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Upload = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View>
                    <Text>Upload</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Upload