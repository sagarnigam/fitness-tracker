import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ExerciseCategoryCard = ({ category, icon }) => {

  return (
    <ImageBackground source={icon} style={styles.card}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']} // Horizontal gradient from black to transparent
        start={{ x: 0, y: 0 }} // Start from the left (x=0) of the container
        end={{ x: 1, y: 0 }}   // End at the right (x=1) of the container
        style={styles.gradient}
      >
        <Text style={styles.categoryText}>{category}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A38',
    // padding: 30,
    marginVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryText: {
    fontSize: 18,
    color: '#ffffff',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
  },
});

export default ExerciseCategoryCard;