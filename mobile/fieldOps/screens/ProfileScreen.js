import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import colors from "../themes/colors";
import { useFonts } from "expo-font";
import Fonts from "../themes/fonts";
import Location from "../icons/Location";
import Bag from "../icons/Bag";

export default function ProfileScreen({ navigation }) {
  const name = "Mr. Daniel";
  const department = "IT";
  const team = "web dev";
  const [fontsLoaded] = useFonts(Fonts);
  const location = "Beb Ezzouar, Algerie";
  const tasksNumber = 2344;

  const buttons = ["My profile", "Statistics", "Location", "Log out"];

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileTopImage}
        source={require("../assets/profileTop.png")}
      />
      <View style={styles.screenContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/profilePic.png")}
        />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{department} department</Text>
          <Text style={styles.bullet}>●</Text>
          <Text style={styles.infoText}>{team} team</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Location />
            <Text style={styles.detailText}>{location}</Text>
          </View>
          <View style={styles.detailSeparator} />
          <View style={styles.detailItem}>
            <Bag />
            <Text style={styles.detailText}>{tasksNumber} tasks completed</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          {buttons.map((item, index) => (
            <Button key={index} label={item} navigation={navigation} />
          ))}
        </View>
      </View>
    </View>
  );
}

function Button({ navigation, label }) {
  let imageSource;
  if (label === "My profile") {
    imageSource = require("../assets/Profile.png");
  } else if (label === "Statistics") {
    imageSource = require("../assets/Chart.png");
  } else if (label === "Location") {
    imageSource = require("../assets/Location.png");
  } else if (label === "Log out") {
    imageSource = require("../assets/Logout.png");
  }
  
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(label)}
    >
      <Image source={imageSource} />
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  screenContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  profileTopImage: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  profileImage: {
    marginBottom: 20,
  },
  name: {
    fontFamily: "GilroyMedium",
    fontSize: 30,
    color: colors.tertiary[500],
  },
  infoContainer: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  infoText: {
    fontFamily: "GilroyLight",
    fontSize: 14,
  },
  bullet: {
    textAlign: "center",
    fontSize: 25,
    color: colors.tertiary[300],
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    padding: 10,
    borderRadius: 12,
    width: "100%",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  detailSeparator: {
    width: 4,
    backgroundColor: colors.primary[300],
    borderRadius: 10,
    height: 30,
  },
  detailText: {
    fontFamily: "GilroyLight",
    fontSize: 10,
    textAlign: "left",
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    padding: 20,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    gap: 25,
    height: 60,
  },
  buttonText: {
    fontFamily: "GilroyBold",
    fontSize: 14,
  },
});
