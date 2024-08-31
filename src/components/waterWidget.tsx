import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const WaterWidget = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryText}>Water</Text>
        <Ionicons style={styles.iconStyles} name="water" size={26} color="#319AE5" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoMainText}>10</Text>
        <Text style={styles.infoSubText}>Glasses (250 ml)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    padding: 15,
    paddingLeft: 20,
    width: "100%",
  },
  categoryText: {
    fontSize: 20,
    color: "#319AE5",
    fontStyle: "italic",
    fontWeight: "500",
  },
  headerContainer: {
    display: 'flex',
    flexDirection: "row",
  },
  iconStyles: {
    marginTop: 3,
    marginLeft: "42%",
  },
  infoContainer: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: "column",
  },
  infoMainText: {
    color: '#319AE5',
    fontSize: 30,
  },
  infoSubText: {
    color: '#319AE5',
    fontSize: 14,
  },
});

export default WaterWidget;
