import { useRouter } from "expo-router";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const ExerciseCard = ({ exerciseDetails }) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push({pathname: "/exerciseDetailsScreen", params: { exerciseDetails: JSON.stringify(exerciseDetails), }})}>
      <View style={styles.card}>
        <Text style={styles.categoryText}>{exerciseDetails.name}</Text>
      </View>
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
    padding: 15,
    paddingLeft: 20,
  },
  categoryText: {
    fontSize: 18,
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default ExerciseCard;
