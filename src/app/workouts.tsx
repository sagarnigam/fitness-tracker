import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import WorkoutCard from "../components/workoutCard";
import { getWorkoutPrograms } from "../services/workoutService";

const Workouts = () => {
  const [workoutPrograms, setWorkoutPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // Fetch exercises when the component mounts
    const fetchWorkoutPrograms = async () => {
      try {
        const data = await getWorkoutPrograms();
        setWorkoutPrograms(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutPrograms();
  }, []);

  let content;
  if (workoutPrograms.length > 0) {
    content = (
      <ScrollView>
        {workoutPrograms.map((item: any) => (
          <TouchableOpacity key={item._id}>
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
};

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

export default Workouts;
