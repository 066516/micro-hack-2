import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNav from "./TabNav";
import { View } from "react-native";
import WelcomeScreen from "../screens/WelcomeScreen";
import StartScreen from "../screens/StartScreen";
import TaskMap from "../components/TaskMap";
const FirstStack = createNativeStackNavigator();

export default function StartNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Welcome screen"
      screenOptions={{
        header: () => <View style={{ height: 20 }}></View>,
      }}
    >
      <FirstStack.Screen name="Welcome screen" component={WelcomeScreen} />
      <FirstStack.Screen name="Login screen" component={LoginScreen} />
      <FirstStack.Screen name="Tab screen" component={TabNav} />
      <FirstStack.Screen name="Start screen" component={StartScreen} />
      <FirstStack.Screen name="TaskMap" component={TaskMap} />
    </FirstStack.Navigator>
  );
}
