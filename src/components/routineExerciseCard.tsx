import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const RoutineExerciseCard = ({ exercisesArray }) => {
  const reps = exercisesArray.reps;
  const sets = exercisesArray.sets;
  const exerciseType = exercisesArray.type;

  return (
    <ScrollView>
      <View
        style={[
          {
            paddingLeft: 6,
            backgroundColor:
              exerciseType === "individual-set"
                ? "white"
                : exerciseType === "super-set"
                ? "#319AE5"
                : "#63BFF7",
            marginVertical: 8,
            borderRadius: 20,
          },
        ]}
      >
        <View style={styles.card}>
          {exercisesArray.exercise.map((exercise, index) => (
            <View style={styles.cardContent} key={index}>
              <Text style={styles.cardHeaderText}>{exercise.name}</Text>
              <Text style={styles.categoryText}>
                Sets: {sets}, Reps: {reps}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#1E2A38",
    borderRadius: 20,
    padding: 10,
  },
  cardContent: {
    padding: 5,
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

export default RoutineExerciseCard;
