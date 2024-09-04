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

const WorkoutRoutine = () => {
  const { workoutDetailsParams } = useLocalSearchParams();
  const programData = workoutDetailsParams
    ? JSON.parse(workoutDetailsParams)
    : null;
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.workoutProgramsContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{programData.name}</Text>
          <Text style={styles.subheaderText}>{programData.programType}</Text>
        </View>
        <View style={styles.exercisesListContainerContainer}>
          <ScrollView>
            {programData.programStructure.map((exercises: any) =>
              exercises.exercise.map((exercise: any) => (
                <View
                  style={[
                    {
                      paddingLeft: 6,
                      backgroundColor: exercises.type === 'individual-set' ? 'white' : exercises.type === 'super-set' ? '#319AE5' : '#63BFF7',
                      marginVertical: 8,
                      borderRadius: 20,
                    },
                  ]}
                >
                  <View style={styles.card}>
                    <Text style={styles.cardHeaderText}>{exercise.name}</Text>
                    <Text style={styles.categoryText}>
                      Sets: {exercises.sets}, Reps: {exercises.reps}
                    </Text>
                  </View>
                </View>
              ))
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
  workoutProgramsContainer: {
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

export default WorkoutRoutine;
