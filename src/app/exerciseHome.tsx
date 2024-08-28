import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import NavigationBar from "../components/navigationBar";

export default function ExerciseHome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <Text style={styles.headerText}>Exercise</Text>
          <Text style={styles.subheaderText}>Category</Text>
        </View>
        <View style={styles.exerciseListContainerContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>My Workouts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>My Workouts</Text>
          </TouchableOpacity>
        </View>
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  exerciseContainer: {
    padding: 15,
    paddingTop: 60,
    height: "100%",
    width: "100%",
    backgroundColor: "#09131F",
  },
  exerciseHeaderContainer: {},
  headerText: {
    fontSize: 40,
    color: "white",
  },
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  exerciseListContainerContainer: {
    paddingTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#319AE5",
    paddingVertical: 10,
    borderRadius: 15,
    width: "100%",
    marginTop: "152%",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
