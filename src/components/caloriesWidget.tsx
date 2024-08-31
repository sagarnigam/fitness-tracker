import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CaloriesWidget = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerText}>Calories <FontAwesome6 name="fire" size={18} color="#319AE5" /></Text>
      <Text style={styles.subheaderText}>2500</Text>
      <Text style={styles.headerText}>kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: "#319AE5",
    fontStyle: "italic",
    marginBottom: 5,
  },
  subheaderText: {
    fontSize: 38,
    color: 'white',
  },
  card: {
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default CaloriesWidget;
