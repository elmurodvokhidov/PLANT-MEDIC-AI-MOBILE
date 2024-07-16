import { View, Text, FlatList } from 'react-native'

const Categories = () => {
    const data = [
        'Gerbitsitlar',
        'Fungitsidlar',
        'Insektitsidlar',
        'Nematsidlar',
        'Stimulyatorlar',
        'Akaratsidlar',
    ];

    return (
        <View className="mx-4 mt-2">
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Text className="text-xl mr-4 text-lime-500 last:mr-0">{item}</Text>
                )}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    )
}

export default Categories