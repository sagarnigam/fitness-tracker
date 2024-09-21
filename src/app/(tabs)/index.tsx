import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CaloriesWidget from "../../components/caloriesWidget";
import StepsWidget from "../../components/stepsWidget";
import WaterWidget from "../../components/waterWidget";
import DailyWeightChartWidget from "../../components/dailyWeightChartWidget";
import { getExercises } from "../../services/exerciseService";

export default function home() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch exercises when the component mounts
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
        console.log(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.homeContainer}>
        <ScrollView style={styles.scrollContentContainer}>
          <View style={styles.homeHeaderContainer}>
            <Text style={styles.headerText}>Dashboard</Text>
          </View>
          <CaloriesWidget />
          <View style={styles.widgetsContainer}>
            <View style={styles.stepsContainer}>
              <StepsWidget />
            </View>
            <View style={styles.waterConsumptionContainer}>
              <WaterWidget />
            </View>
          </View>
          <View style={styles.chartContainer}>
            <DailyWeightChartWidget />
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
  homeContainer: {
    display: "flex",
    padding: 15,
    paddingTop: 60,
    height: "100%",
    width: "100%",
    backgroundColor: "#09131F",
  },
  scrollContentContainer: {
    flex: 1,
  },
  navigationContainer: {
    flex: 0.065,
  },
  homeHeaderContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
  },
  subheaderText: {
    fontSize: 28,
    color: "#319AE5",
  },
  widgetsContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  stepsContainer: {
    flex: 1,
    padding: 5,
  },
  waterConsumptionContainer: {
    flex: 1,
    padding: 5,
  },
  chartContainer: {
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
