import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Workout } from "../models/my-workouts";

const WorkoutCard = ({ workoutDetails }: { workoutDetails: Workout}) => {
  const router = useRouter();

  let workoutDetailsParams = JSON.stringify(workoutDetails);

  return (
    <TouchableOpacity onPress={() => router.push({ pathname: "workoutRoutine", params: { workoutDetailsParams } })}>
      <ImageBackground source={require("../../assets/images/chest.jpg")} style={styles.card}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.cardHeaderText}>{workoutDetails.name}</Text>
          <Text style={styles.categoryText}>{workoutDetails.programType}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2A38",
    marginVertical: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardHeaderText: {
    fontSize: 25,
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "400",
  },
  categoryText: {
    fontSize: 18,
    color: "#319AE5",
    fontStyle: "italic",
  },
  gradient: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
  },
});

export default WorkoutCard;
