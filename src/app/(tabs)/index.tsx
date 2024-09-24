import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CaloriesWidget from "../../components/caloriesWidget";
import StepsWidget from "../../components/stepsWidget";
import WaterWidget from "../../components/waterWidget";
import DailyWeightChartWidget from "../../components/dailyWeightChartWidget";
// import GoogleFit, { Scopes } from "react-native-google-fit";

export default function home() {
  //================================================================================================
  // Fitness api functions

  // let [dailySteps, setdailySteps] = useState(0);
  // let [loading, setLoading] = useState(true);

  // const options = {
  //   scopes: [
  //     Scopes.FITNESS_ACTIVITY_READ,
  //     Scopes.FITNESS_ACTIVITY_WRITE,
  //     Scopes.FITNESS_BODY_READ,
  //     Scopes.FITNESS_BODY_WRITE,
  //     Scopes.FITNESS_BLOOD_PRESSURE_READ,
  //     Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
  //     Scopes.FITNESS_BLOOD_GLUCOSE_READ,
  //     Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
  //     Scopes.FITNESS_NUTRITION_WRITE,
  //     Scopes.FITNESS_SLEEP_READ,
  //   ],
  // };

  // GoogleFit.checkIsAuthorized().then(() => {
  //   let authorized = GoogleFit.isAuthorized;
  //   console.log(authorized);
  //   if (authorized) {
  //     fetchStepsData(opt);
  //   } else {
  //     GoogleFit.authorize(options)
  //       .then((authResult) => {
  //         if (authResult.success) {
  //           console.log("AUTH_SUCCESS");
  //         } else {
  //           console.log("AUTH_DENIED " + authResult.message);
  //         }
  //       })
  //       .catch(() => {
  //         console.log("AUTH_ERROR");
  //       });
  //   }
  // });

  // let today = new Date();
  // let lastWeekDate = new Date(
  //   today.getFullYear(),
  //   today.getMonth(),
  //   today.getDate() - 8
  // );

  // const opt = {
  //   startDate: lastWeekDate.toISOString(),
  //   endDate: today.toISOString(), 
  //   bucketUnit: "DAY",
  //   bucketInterval: 1,
  // };

  // let fetchStepsData = async (opt: any) => {
  //   const res = await GoogleFit.getDailyStepCountSamples(opt);
  //   if (res.length !== 0) {
  //     for (var i = 0; i < res.length; i++) {
  //       if (res[i].source === "com.google.android.gms:estimated_steps") {
  //         let data = res[i].steps.reverse();
  //         let dailyStepCount = res[i].steps;
  //         setdailySteps(data[0].value);

  //         console.log(dailySteps, dailyStepCount);
  //       }
  //     }
  //   } else {
  //     console.log("Not Found");
  //   }
  // };

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
