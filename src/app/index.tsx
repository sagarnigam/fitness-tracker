import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/home-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()} 
          style={styles.homeTextContainer}>
          <Text style={styles.homeText}>Track you <Text style={styles.hightlightText}>Workouts</Text></Text>
          <Text style={styles.homeText}>like never <Text style={styles.hightlightText}>before</Text></Text>

          <TouchableOpacity
            onPress={() => router.push("home")}
            style={styles.primaryButton}
          >
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
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  homeTextContainer: {
    marginTop: "155%",
    alignItems: "center",
    height: "27%",
  },
  homeText: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  hightlightText: {
    color: '#319AE5',
    textShadowColor: '#fff',
    textShadowOffset:{width: .5, height: .5},
    textShadowRadius: 2,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: "#319AE5",
    width: "60%",
    height: "25%",
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  buttonText: {
    padding: 5,
    fontSize: 30,
    color: "white",
  },
});
