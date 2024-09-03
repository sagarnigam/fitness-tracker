import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WorkoutCard = ({ workoutDetails }) => {
  const router = useRouter();

  return (
    <TouchableOpacity>
      <ImageBackground source={workoutDetails.programImage} style={styles.card}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"]} // Horizontal gradient from black to transparent
          start={{ x: 0, y: 0 }} // Start from the left (x=0) of the container
          end={{ x: 1, y: 0 }} // End at the right (x=1) of the container
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
