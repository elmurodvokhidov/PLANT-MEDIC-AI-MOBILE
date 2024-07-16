import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import mainbg from "../../assets/images/main-background.jpg"
import NavButton from '../../components/NavButton'
import Carousel from '../../components/Carousel'
import doctor1 from '../../assets/images/doctor1.jpg';
import doctor2 from '../../assets/images/doctor2.jpeg';
import doctor3 from '../../assets/images/doctor3.png';
import doctor4 from '../../assets/images/doctor4.webp';

const index = () => {
    const team = [
        {
            imgUrl: doctor1,
            name: 'Jhon Watson',
            profession: 'Biolog'
        },
        {
            imgUrl: doctor2,
            name: 'Alex Gary',
            profession: 'Biolog'
        },
        {
            imgUrl: doctor3,
            name: 'Devit Uwik',
            profession: 'Biolog'
        },
        {
            imgUrl: doctor4,
            name: 'Uviliam Helzy',
            profession: 'Biolog'
        },
    ];

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

                <View className="w-full px-4 py-10 gap-4">
                    <Text className="text-4xl font-nunitosemibold">Out Team</Text>
                    {
                        team.map((member, index) => (
                            <View
                                key={index}
                                className="w-full items-center my-4 bg-white p-4 rounded-lg shadow-lg"
                            >
                                <Image
                                    source={member.imgUrl}
                                    resizeMode='cover'
                                    className="w-72 h-72 rounded-full mb-2"
                                />
                                <Text className="text-2xl">{member.name}</Text>
                                <Text className="text-xl">{member.profession}</Text>
                            </View>
                        ))
                    }
                </View>

                <View className="w-full px-4 py-10 gap-4">
                    <Text className="text-4xl font-nunitosemibold">Contact Us</Text>

                    <View className="gap-2">
                        <Text className="text-xl">First name</Text>
                        <TextInput
                            placeholder='John'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg"
                        />
                    </View>
                    <View className="gap-2">
                        <Text className="text-xl">Last name</Text>
                        <TextInput
                            placeholder='Doe'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg"
                        />
                    </View>
                    <View className="gap-2">
                        <Text className="text-xl">Phone number</Text>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='+1-230-456-78-98'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg"
                        />
                    </View>
                    <View className="gap-2 mb-5">
                        <Text className="text-xl">Your message</Text>
                        <TextInput
                            multiline={true}
                            placeholder='Write your message...'
                            className="border border-gray-300 px-3 py-2 text-xl rounded-lg"
                        />
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

export default index