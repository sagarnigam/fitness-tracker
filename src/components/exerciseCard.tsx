import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

const ExerciseCard = ({ category }) => {
  //   const router = useRouter();

  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    </View>
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
