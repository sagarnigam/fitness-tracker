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
import { EXERCISE_CATEGORY } from "../../mock-data/exercise-list";
import ExerciseCategoryCard from "../../components/exerciseCategoryCard";
import { useRouter } from "expo-router";

export default function ExerciseCategoryHome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <Text style={styles.headerText}>Exercise</Text>
          <Text style={styles.subheaderText}>Category</Text>
        </View>
        <View style={styles.exerciseListContainerContainer}>
          <ScrollView>
            {EXERCISE_CATEGORY.map((item: any) => (
              <TouchableOpacity key={item.id}>
                <ExerciseCategoryCard category={item.name} icon={item.icon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.push('workouts')}>
            <Text style={styles.text}>My Workouts</Text>
          </TouchableOpacity>
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
    fontStyle: "italic",
  },
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  exerciseListContainerContainer: {
    height: "71%",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#319AE5",
    paddingVertical: 10,
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
