import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExerciseCard from "../components/exerciseCard";
import { getExercises } from "../services/exerciseService";

export default function ExercisesScreen() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Fetch exercises when the component mounts
    const fetchExercises = async () => {
      try {
        const data = await getExercises(category);
        setExercises(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  let content;
  if (exercises.length > 0) {
    content = (
      <ScrollView>
        {exercises.map((item: any) => (
          <TouchableOpacity key={item.id}>
            <ExerciseCard exerciseDetails={item} />
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
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{category}</Text>
          <Text style={styles.subheaderText}>Exercises</Text>
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
  exerciseContainer: {
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
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  exercisesListContainerContainer: {
    height: "82%",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
