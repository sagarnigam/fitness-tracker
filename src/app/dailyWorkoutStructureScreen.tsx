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

const DailyWorkoutStuctureScreen = () => {
  const workoutProgramData = useLocalSearchParams();
  const router = useRouter();

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
            {MY_WORKOUTS.filter(
              (program) => program.id === workoutProgramData.programId
            )[0]
              .programStructure.filter(
                (selectDay) => selectDay.day === workoutProgramData.day
              )[0]
              .exercises.map((exercise) => (
                <View
                  style={[
                    {
                      paddingLeft: 6,
                      backgroundColor:
                        exercise.type === "individual-set"
                          ? "white"
                          : exercise.type === "super-set"
                          ? "#319AE5"
                          : "#63BFF7",
                      marginVertical: 8,
                      borderRadius: 20,
                    },
                  ]}
                >
                  <View style={styles.card}>
                    <Text style={styles.cardHeaderText}>{exercise.name}</Text>
                    <Text style={styles.categoryText}>
                      Sets: {exercise.sets}, Reps: {exercise.reps}
                    </Text>
                  </View>
                </View>
              ))}
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
  card: {
    alignItems: "center",
    backgroundColor: "#1E2A38",
    borderRadius: 20,
    padding: 15,
  },
  cardHeaderText: {
    fontSize: 18,
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "400",
  },
  categoryText: {
    fontSize: 14,
    color: "#319AE5",
    fontStyle: "italic",
  },
});

export default DailyWorkoutStuctureScreen;
