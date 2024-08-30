import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="exerciseCategoryHome" options={{}} />
      <Stack.Screen name="profile" options={{}} />
      <Stack.Screen name="exerciseDetailsScreen" options={{
        presentation: 'fullScreenModal',
      }} />
    </Stack>
  );
}