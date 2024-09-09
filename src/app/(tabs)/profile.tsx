import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    membership: "Premium",
    workoutsCompleted: 54,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#09131F" />
      <View style={styles.profileContainer}>
        <View style={styles.homeHeaderContainer}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <ScrollView style={styles.scrollContentContainer}>
          <View style={styles.pcontainer}>
            <View style={styles.profilePicContainer}>
              <Image
                source={{ uri: user.profilePic }}
                style={styles.profilePic}
              />
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{user.membership}</Text>
                <Text style={styles.infoLabel}>Membership</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>{user.workoutsCompleted}</Text>
                <Text style={styles.infoLabel}>Workouts</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
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
  profileContainer: {
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
  pcontainer: {
    flex: 1,
    backgroundColor: "#09131F",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingTop: 10,
  },
  profilePicContainer: {
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  email: {
    fontSize: 16,
    color: "white",
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  infoBox: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  infoLabel: {
    fontSize: 14,
    color: "white",
  },
  editButton: {
    backgroundColor: "#319AE5",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: '63.5%',
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "red",
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
});
