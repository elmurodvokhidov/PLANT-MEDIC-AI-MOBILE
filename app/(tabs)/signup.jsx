import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import loginBackground from '../../assets/images/loginBackground.png'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <Image
                    source={loginBackground}
                    resizeMode='cover'
                    className="w-full h-screen"
                />

                <View className="w-full absolute pt-24 px-4 gap-y-2">
                    <Text className="text-4xl">Register</Text>

                    <View className="gap-2">
                        <Text className="text-xl">First name</Text>
                        <TextInput
                            placeholder='John'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg bg-white"
                        />
                    </View>
                    <View className="gap-2">
                        <Text className="text-xl">Last name</Text>
                        <TextInput
                            placeholder='Doe'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg bg-white"
                        />
                    </View>
                    <View className="gap-2">
                        <Text className="text-xl">Your email</Text>
                        <TextInput
                            placeholder='example@mail.com'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg bg-white"
                        />
                    </View>
                    <View className="relative gap-2">
                        <Text className="text-xl">
                            <Text>Password</Text>
                        </Text>
                        <TextInput
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg bg-white"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            className="absolute bottom-3 right-2 z-10"
                        >
                            <Ionicons
                                name={!showPassword ? 'eye-outline' : 'eye-off-outline'}
                                size={22}
                                color="silver"
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row gap-x-2 justify-end mb-4">
                        <Text className="text-base text-gray-500">Already have an account?</Text>
                        <Link
                            href={'signin'}
                            className='text-base text-lime-500'
                        >
                            Login
                        </Link>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="w-60 py-2 justify-center items-center rounded-2xl bg-lime-500"
                    >
                        <Text className="text-white text-xl">Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup