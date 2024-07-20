import { ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Signin from './signin';

const Profile = () => {

    return (
        <SafeAreaView className="h-screen bg-primary">
            <ScrollView>
                <Signin />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile