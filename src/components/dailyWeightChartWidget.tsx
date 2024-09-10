import { View, Text } from "react-native";
import React from "react";

const DailyWeightChartWidget = () => {
  const lineData = [
    { value: 0, label: new Date('1-01-2020').toLocaleDateString() },
    { value: 20, label: new Date('1-01-2020').toDateString() },
    { value: 18, label: new Date('1-01-2020').toDateString() },
    { value: 40, label: new Date('1-01-2020').toDateString() },
    { value: 36, label: new Date('1-01-2020').toDateString() },
    { value: 60, label: new Date('1-01-2020').toDateString() },
    { value: 54, label: new Date('1-01-2020').toDateString() },
  ];
  return (
    <View style={{ backgroundColor: "transparent", width: '100%'}}>
    </View>
  );
};

export default DailyWeightChartWidget;
