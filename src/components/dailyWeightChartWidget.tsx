import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const DailyWeightChartWidget = () => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `white`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };

  const data = {
    labels: ["17/09", "18/09", "19/09", "20/09", "21/09", "22/09", "23/09"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 49],
        color: (opacity = 1) => `#319AE5`, // optional
        strokeWidth: 3, // optional
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.subheaderText}>Weight</Text>
        <Text style={styles.headerText}>Kgs</Text>
      </View>
      <LineChart
        style={{marginLeft: - 45}}
        data={data}
        width={screenWidth + 45}
        height={256}
        verticalLabelRotation={0}
        chartConfig={chartConfig}
        bezier
        withDots={true}
        withShadow={true}
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        fromZero={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    paddingTop: 25,
  },
  headerText: {
    fontSize: 20,
    color: "#319AE5",
    fontStyle: "italic",
    marginBottom: 5,
  },
  subheaderText: {
    fontSize: 38,
    color: "white",
    fontStyle: "italic",
  },
  card: {
    overflow: "hidden",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default DailyWeightChartWidget;
