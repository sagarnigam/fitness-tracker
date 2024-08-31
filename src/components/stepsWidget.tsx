import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function StepsWidget() {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryText}>Steps</Text>
        <Ionicons style={styles.iconStyles} name="footsteps-sharp" size={25} color="white" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoMainText}>5000</Text>
        <Text style={styles.infoSubText}>Steps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#319AE5",
    borderRadius: 20,
    overflow: "hidden",
    padding: 15,
    paddingLeft: 20,
    width: "100%",
  },
  categoryText: {
    fontSize: 20,
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "500",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconStyles: {
    marginTop: 3,
    marginLeft: "42%",
  },
  infoContainer: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "column",
  },
  infoMainText: {
    color: "white",
    fontSize: 30,
  },
  infoSubText: {
    color: "white",
    fontSize: 14,
  },
});
