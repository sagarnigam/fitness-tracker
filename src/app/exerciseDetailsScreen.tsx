import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function exerciseDetailsScreen() {
  const { exerciseDetails } = useLocalSearchParams();
  const exerciseData = exerciseDetails ? JSON.parse(exerciseDetails) : null;
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.exerciseContainer}>
        <View style={styles.exerciseHeaderContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{exerciseData.name}</Text>
        </View>
        <ScrollView>
          <View style={[styles.card]}>
            <Text style={styles.subheaderText}>Description</Text>
            <Text style={styles.text}>{exerciseData.description}</Text>
          </View>
          <View style={[styles.card]}>
            <Text style={styles.subheaderText}>Muscles</Text>
            <Text style={styles.text}>{exerciseData.muscles.join(", ")}</Text>
          </View>
          <View style={[styles.card]}>
            <Text style={styles.subheaderText}>Instructions</Text>
            {exerciseData.instructions.map((instruction: string, index: number) => (
              <Text key={index} style={[styles.text, { marginBottom: 15,}]}>{index + 1}. {instruction}</Text>
            ))}
          </View>
        </ScrollView>
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
  },
  subheaderText: {
    fontSize: 20,
    color: "#319AE5",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1E2A38",
    marginVertical: 8,
    borderRadius: 20,
    overflow: "hidden",
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 23,
  },
});
