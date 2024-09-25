import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import RoutineExerciseCard from "../components/routineExerciseCard";
import { getProgramStructureByDay } from "../services/workoutService";

const DailyWorkoutStuctureScreen = () => {
  const [programStructure, setProgramStructure] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const workoutProgramData = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Fetch exercises when the component mounts
    const fetchProgramStructureByDay = async () => {
      try {
        const data = await getProgramStructureByDay(workoutProgramData.programId, workoutProgramData.day);
        setProgramStructure(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramStructureByDay();
  }, []);

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
          {/* <ScrollView>
            {workoutDayDetails.exercises.map((exercisesArray, index) =>
                <RoutineExerciseCard exercisesArray={exercisesArray} key={index}/>
              )}
          </ScrollView> */}
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
