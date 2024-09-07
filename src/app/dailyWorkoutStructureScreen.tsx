import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MY_WORKOUTS } from "../mock-data/my-workouts";
import RoutineExerciseCard from "../components/routineExerciseCard";

const DailyWorkoutStuctureScreen = () => {
  const workoutProgramData = useLocalSearchParams();
  const router = useRouter();

  let program = MY_WORKOUTS.filter((program) => program.id === workoutProgramData.programId)[0];
  let workoutDayDetails = program.programStructure.filter((selectDay) => selectDay.day === workoutProgramData.day)[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.dailyWorkoutScreenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Day {workoutProgramData.day}</Text>
        </View>
        <View style={styles.exercisesListContainerContainer}>
          <ScrollView>
            {workoutDayDetails.exercises.map((exercisesArray, index) =>
                <RoutineExerciseCard exercisesArray={exercisesArray} key={index}/>
              )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  dailyWorkoutScreenContainer: {
    padding: 15,
    paddingTop: 60,
    height: "100%",
    width: "100%",
    backgroundColor: "#09131F",
  },
  headerContainer: {
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
  exercisesListContainerContainer: {
    height: "82%",
    marginBottom: 20,
  },
});

export default DailyWorkoutStuctureScreen;
