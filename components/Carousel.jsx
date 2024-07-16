import { Dimensions, FlatList, Image, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from "react";
import image1 from "../assets/images/carouserl1.jpg"
import image2 from "../assets/images/carouserl2.jpg"
import image3 from "../assets/images/carouserl3.png"
import image4 from "../assets/images/carouserl4.jpg"
import image5 from "../assets/images/carouserl5.jpg"

const Carousel = () => {
    const { width } = Dimensions.get('screen');
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const data = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (!isScrolling && flatListRef.current) {
                flatListRef.current.scrollToIndex({
                    animated: true,
                    index: (currentIndex + 1) % data.length,
                });
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, [currentIndex, isScrolling]);

    const handleScrollBegin = () => {
        setIsScrolling(true);
    };

    const handleScrollEnd = () => {
        setIsScrolling(false);
    };

    const handlePrevious = () => {
        if (!isScrolling && flatListRef.current) {
            const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
            flatListRef.current.scrollToIndex({
                animated: true,
                index: newIndex,
            });
            setCurrentIndex(newIndex);
        }
    };

    const handleNext = () => {
        if (!isScrolling && flatListRef.current) {
            const newIndex = (currentIndex + 1) % data.length;
            flatListRef.current.scrollToIndex({
                animated: true,
                index: newIndex,
            });
            setCurrentIndex(newIndex);
        }
    };

    const renderItem = ({ item }) => {
        return <View style={{ width }} className="justify-between items-center">
            <Image
                source={item}
                style={{
                    width: width * 0.9,
                    height: 300,
                    resizeMode: 'cover',
                    borderRadius: 10,
                }}
            />
        </View>
    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                onScrollBeginDrag={handleScrollBegin}
                onScrollEndDrag={handleScrollEnd}
                onTouchStart={handleScrollBegin}
                onTouchEnd={handleScrollEnd}
            />

            {/* <View className="w-full flex-row justify-between px-5 mt-2 absolute">
                <TouchableOpacity
                    onPress={handlePrevious}
                    className="top-32 left-2"
                >
                    <AntDesign
                        name="leftcircleo"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNext}
                    className="top-32 right-2"
                >
                    <AntDesign
                        name="rightcircleo"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default Carousel