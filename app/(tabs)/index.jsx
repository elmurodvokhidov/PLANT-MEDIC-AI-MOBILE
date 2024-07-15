import { View, Text, ScrollView, Image, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mainbg from "../../assets/images/main-background.jpg"
import NavButton from '../../components/navButton'
import Carousel from '../../components/Carousel'

const index = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View className="w-full h-[60vh] relative overflow-hidden">
                    <Image
                        source={mainbg}
                        className="w-full h-full"
                        resizeMode='cover'
                    />
                    <View className="w-full h-full gap-4 absolute top-0 left-0 pt-20 pl-4">
                        <Text className='text-4xl font-nunitoextrabold text-primary'>Plant Medic <Text className="text-lime-500">AI</Text></Text>
                        <Text className='text-lg font-nunitomedium text-primary'>A simple and easy-to-use AI-based image classification system for Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ipsum quam quibusdam, voluptatum suscipit, excepturi ut nemo rerum cupiditate maxime eveniet aperiam omnis optio blanditiis cum sapiente culpa. Fuga?</Text>
                        <NavButton
                            url={"upload"}
                            text={"Get Started"}
                        />
                    </View>
                </View>

                <View className="w-full px-4 py-10 gap-4">
                    <Text className="text-4xl font-nunitosemibold">About Us</Text>
                    <Text className="text-lg font-nunitomedium">A simple and easy-to-use AI-based image classification system for Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias ipsum quam quibusdam, voluptatum suscipit, excepturi ut nemo rerum cupiditate maxime eveniet aperiam omnis optio blanditiis cum sapiente culpa. Fuga?</Text>
                    <NavButton
                        url={"about"}
                        text={"Learn More"}
                    />
                </View>

                <Carousel />
            </ScrollView>
        </SafeAreaView>
    )
}

export default index