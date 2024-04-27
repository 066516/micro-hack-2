import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../themes/colors";
import { useFonts } from "expo-font";
import Fonts from "../themes/fonts";
import Decline from "../icons/Decline";
import Accept from "../icons/Accept";
import { useNavigation } from "@react-navigation/native";

export default function TaskCard({ taskprops }) {
  const [fontsLoaded] = useFonts(Fonts);
  const task = taskprops;
  /* const task = {
    title: "Guests Orientation",
    status: "Pending",
    taskType: "Task’s Type",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...",
    location: "Bab Ezzouar, Algiers",
    timeLimit: "Only 2h for this task, you’ve to approve it before 9:00",
  };*/

  if (!fontsLoaded) {
    return null; // Or any loading indicator
  }
  const navigation = useNavigation(); // Initialize useNavigation hook

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("TaskMap")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <Text
          style={{
            ...styles.status,
            color:
              task.status == "Done"
                ? colors.tertiary[500]
                : task.status == "Cancelled"
                ? "CD2929"
                : "black",
          }}
        >
          {task.status}
        </Text>
      </View>
      <Text style={styles.type}>{task.taskType}</Text>
      <Text style={styles.desc}>{task.description}</Text>
      <View style={styles.locationContainer}>
        <View style={styles.locationIconContainer}>
          <Image source={require("../assets/Location.png")} />
          <Text style={styles.location}>{task.location}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button}>
            <Decline />
          </Pressable>
          <Pressable style={[styles.button, styles.acceptButton]}>
            <Accept />
          </Pressable>
        </View>
      </View>
      <Text style={styles.time}>{task.timeLimit}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: colors.secondary[300],
    padding: 16,
    margin: 16,
    height: 200,
    width: 265,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontFamily: "GilroyBold",
  },
  status: {
    fontSize: 8,
    fontFamily: "GilroyRegular",
  },
  text: {
    marginBottom: 8,
  },
  type: {
    fontSize: 10,
    fontFamily: "GilroyRegular",
  },
  desc: {
    fontSize: 10,
    fontFamily: "GilroyLight",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationIconContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  location: {
    fontSize: 10,
    fontFamily: "GilroyRegular",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: 68,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 22,
  },
  acceptButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 1,
  },
  time: {
    fontSize: 8,
    fontFamily: "GilroyLight",
  },
});
