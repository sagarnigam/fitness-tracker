import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MY_WORKOUTS } from "../mock-data/my-workouts";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react'
import WorkoutCard from "../components/workoutCard";

const Workouts = () => {
  const router = useRouter();

  let content;
  if (
    MY_WORKOUTS.length > 0
  ) {
    content = (
      <ScrollView>
        {MY_WORKOUTS.map((item: any) => (
          <TouchableOpacity key={item.id}>
           <WorkoutCard workoutDetails={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  } else {
    content = <Text>No exercises</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.myWorkoutsContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Workouts</Text>
        </View>
        <View style={styles.exercisesListContainerContainer}>{content}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  myWorkoutsContainer: {
    padding: 15,
    paddingTop: 60,
    height: "100%",
    width: "100%",
    backgroundColor: "#09131F",
  },
  exerciseHeaderContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
  },
  exercisesListContainerContainer: {
    height: "82%",
    marginBottom: 20,
  },
});

export default Workouts