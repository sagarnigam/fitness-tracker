import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.profileContainer}>
        <ScrollView style={styles.scrollContentContainer}>
          <View style={styles.homeHeaderContainer}>
            <Text style={styles.headerText}>Profile</Text>
          </View>

          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  profileContainer: {
    display: "flex",
    padding: 15,
    paddingTop: 60,
    height: "100%",
    width: "100%",
    backgroundColor: "#09131F",
  },
  scrollContentContainer: {
    flex: 1,
  },
  navigationContainer: {
    flex: 0.065,
  },
  homeHeaderContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
  },
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
