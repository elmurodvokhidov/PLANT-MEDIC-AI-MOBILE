import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center pt-2">
      <MaterialIcons name={icon} size={28} color={color} />
      <Text
        className={`${focused ? "font-nunitosemibold" : "font-nunitoregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#84cc16",
        tabBarInactiveTintColor: "#CDCDE0"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={"home"}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={"my-library-books"}
              color={color}
              name="Products"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={"shopping-cart"}
              color={color}
              name="Cart"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              icon={"person"}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          href: null,
          headerTitle: "Upload an Image"
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          href: null,
          headerTitle: "About Us"
        }}
      />
    </Tabs>
  )
}

export default TabsLayout