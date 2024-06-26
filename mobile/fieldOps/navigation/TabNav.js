import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { View } from "react-native";
import NavBar from "../components/NavBar";
import Taskscreen from "../screens/Taskscreen";
import VoiceScreen from "../screens/VoiceScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TaskMap from "../components/TaskMap";
import TaskMapNav from "./TaskMapNav";
import StartNav from "./StartNav";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      // screenOptions={{ header: () => <View style={{ height: 20 }}></View> }}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <NavBar {...props} />}
    >
      {/* <Tab.Screen
        name="main"
        component={StartNav}
        options={{ title: "Tasks" }}
      /> */}
      <Tab.Screen
        name="Tasks"
        component={TaskMapNav}
        options={{ title: "Tasks" }}
      />
      <Tab.Screen
        name="Voice"
        component={VoiceScreen}
        options={{ title: "Voice" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />

      <Tab.Screen name="Map" component={MapScreen} options={{ title: "Map" }} />
    </Tab.Navigator>
  );
}
