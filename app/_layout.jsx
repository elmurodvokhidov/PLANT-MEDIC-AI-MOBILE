import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "../redux/store/store"

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
        "Nunito-Black-Italic": require("../assets/fonts/Nunito-BlackItalic.ttf"),
        "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
        "Nunito-Bold-Italic": require("../assets/fonts/Nunito-BoldItalic.ttf"),
        "Nunito-Extra-Bold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
        "Nunito-Extra-Bold-Italic": require("../assets/fonts/Nunito-ExtraBoldItalic.ttf"),
        "Nunito-Extra-Light": require("../assets/fonts/Nunito-ExtraLight.ttf"),
        "Nunito-Extra-Light-Italic": require("../assets/fonts/Nunito-ExtraLightItalic.ttf"),
        "Nunito-Italic": require("../assets/fonts/Nunito-Italic.ttf"),
        "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
        "Nunito-Light-Italic": require("../assets/fonts/Nunito-LightItalic.ttf"),
        "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
        "Nunito-Medium-Italic": require("../assets/fonts/Nunito-MediumItalic.ttf"),
        "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
        "Nunito-Semi-Bold": require("../assets/fonts/Nunito-SemiBold.ttf"),
        "Nunito-Semi-Bold-Italic": require("../assets/fonts/Nunito-SemiBoldItalic.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    )
}

export default RootLayout