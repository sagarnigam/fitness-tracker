import { View, Text } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";

const DailyWeightChartWidget = () => {
  const lineData = [
    { value: 0, label: "test" },
    { value: 20, label: "test" },
    { value: 18, label: "test" },
    { value: 40, label: "test" },
    { value: 36, label: "test" },
    { value: 60, label: "test" },
    { value: 54, label: "test" },
    { value: 85, label: "test" },
  ];
  return (
    <View style={{ backgroundColor: "#1A3461" }}>
      <LineChart
        isAnimated
        initialSpacing={0}
        data={lineData}
        spacing={30}
        hideDataPoints
        thickness={5}
        hideRules
        hideYAxisText
        yAxisColor="#0BA5A4"
        showVerticalLines={false}
        xAxisColor="#0BA5A4"
        color="#0BA5A4"
        curved={true}
      />
    </View>
  );
};

export default DailyWeightChartWidget;
