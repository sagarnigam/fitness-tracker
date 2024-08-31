import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, useSegments  } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavigationBar() {
  const router = useRouter();
  const segments = useSegments();
  
  const navigationItems = [
    { label: 'Home', icon: 'home', route: 'home' },
    { label: 'Exercise', icon: 'barbell', route: 'exerciseCategoryHome' },
    { label: 'Profile', icon: 'person', route: 'profile' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {navigationItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem} onPress={() => {
            if(segments[0] !== item.route) {
            router.push(item.route)
            }
          }}>
            <Ionicons name={item.icon} size={26} color="white" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#A9A9A930',
    paddingVertical: 10,
    borderRadius: 15,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: 'white',
  },
  navLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});
