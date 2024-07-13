import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View>
                    <Text>Profile</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile