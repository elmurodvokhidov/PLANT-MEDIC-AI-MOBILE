import { useNavigation } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native'

const NavButton = ({ url, text }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate(url)}
            className="w-60 py-2 justify-center items-center rounded-2xl bg-lime-500 mt-4 ml-4"
        >
            <Text className="text-white text-lg">{text}</Text>
        </TouchableOpacity>
    )
}

export default NavButton