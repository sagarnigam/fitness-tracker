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
import {
  statusCodes,
  GoogleSigninButton,
  GoogleSignin,
  isErrorWithCode,
} from "@react-native-google-signin/google-signin";

export default function Index() {
  const router = useRouter();

  const configureGoogle = () => {
    GoogleSignin.configure({
      webClientId: "",
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
    });

    signIn();
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(JSON.stringify(response));
      router.push("(tabs)");
    } catch (error) {
      if (error) {
        switch (error) {
          case statusCodes.IN_PROGRESS:
            console.log(error);
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log(error);
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
        
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/images/home-screen.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.homeTextContainer}
        >
          <Text style={styles.homeText}>
            Track you <Text style={styles.hightlightText}>Workouts</Text>
          </Text>
          <Text style={styles.homeText}>
            like never <Text style={styles.hightlightText}>before</Text>
          </Text>
          <TouchableOpacity
            onPress={() => router.push("(tabs)")}
            style={styles.primaryButton}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          {/* <GoogleSigninButton
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {
              configureGoogle();
            }}
            disabled={false}
          /> */}
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
    fontStyle: "italic",
  },
  hightlightText: {
    color: "#63BFF7",
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: "#319AE5",
    width: "60%",
    borderRadius: 25,
    alignItems: "center",
    padding: 10,
    paddingTop: 7,
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    fontStyle: "italic",
    fontWeight: "500",
  },
});
