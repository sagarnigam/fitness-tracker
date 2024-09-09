import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomNavigation,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={"home"} size={26} color={focused ? '#63BFF7' : 'white'}  />
          ),
        }}
      />
      <Tabs.Screen
        name="exerciseCategoryHome"
        options={{
          title: "Exercise",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={"barbell"} size={26} color={focused ? '#63BFF7' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={"person"} size={26} color={focused ? '#63BFF7' : 'white'} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#A9A9A930',
    height: 50,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  },
});
