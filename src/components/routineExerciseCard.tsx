import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const RoutineExerciseCard = ({ exercisesArray }) => {
  return (
    <ScrollView>
      {exercisesArray.exercise.map((exercise) => (
        <View
          style={[
            {
              paddingLeft: 6,
              backgroundColor:
                exercise.type === "individual-set"
                  ? "white"
                  : exercise.type === "super-set"
                  ? "#319AE5"
                  : "#63BFF7",
              marginVertical: 8,
              borderRadius: 20,
            },
          ]}
        >
          <View style={styles.card}>
            <Text style={styles.cardHeaderText}>{exercise.name}</Text>
            <Text style={styles.categoryText}>
              Sets: {exercise.sets}, Reps: {exercise.reps}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default RoutineExerciseCard;
