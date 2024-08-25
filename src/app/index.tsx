import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('../../assets/images/home-1.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
  },
  primaryButton: {
    backgroundColor: '#319AE5',
    width: '60%',
    height: '25%',
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    padding: 5,
    fontSize: 30,
    color: 'white',
  }
});
