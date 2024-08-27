import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationBar from '../components/navigationBar';

export default function home() {
  return (
    <View style={styles.homeContainer}>
      <Text>Home page</Text>
      <NavigationBar></NavigationBar>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: "#09131F",
  },
});