import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { EXERCISE_LIST } from "../mock-data/exercise-list";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ExerciseCard from "../components/exerciseCard";

export default function ExercisesScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  let content;
  if (
    EXERCISE_LIST.filter((exercises) => exercises.exerciseCategory === category)
      .length > 0
  ) {
    content = (
      <ScrollView>
        {EXERCISE_LIST.filter(
          (exercise) => exercise.exerciseCategory === category
        )[0].exercise.map((item: any) => (
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
