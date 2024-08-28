import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import NavigationBar from "../components/navigationBar";

export default function ExerciseHome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.exerciseContainer}>
        <Text style={styles.text}>Exercise page</Text>
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  exerciseContainer: {
    paddingTop: 60,
    height: '100%',
    width: '100%',
    backgroundColor: "#09131F",
  },
  text: {
    color: "white", // Ensures the text is visible on a dark background
  },
});
