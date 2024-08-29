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
import { EXERCISE_CATEGORY } from "../mock-data/exercise-list";
import ExerciseCategoryCard from "../components/exerciseCategoryCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ExercisesScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{ category }</Text>
          <Text style={styles.subheaderText}>Exercises</Text>
        </View>
        <View style={styles.exerciseListContainerContainer}>
          <ScrollView>
            {EXERCISE_CATEGORY.map((item: any) => (
              <TouchableOpacity>
                <ExerciseCategoryCard category={item.name} icon={item.icon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
  },
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  exerciseListContainerContainer: {
    height: "71%",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
