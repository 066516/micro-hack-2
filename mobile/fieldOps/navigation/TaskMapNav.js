import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import { View } from "react-native";
import TasksScreen from "../screens/Taskscreen";
import TaskMapScreen from "../screens/TaskMapScreen";

const SecondStack = createNativeStackNavigator();

export default function TaskMapNav() {
  return (
    <SecondStack.Navigator
      initialRouteName="Tasks screen"
      screenOptions={{
        header: () => <View style={{ height: 20 }}></View> }}
    >
      <SecondStack.Screen name="Tasks screen" component={TasksScreen} />
      <SecondStack.Screen name="Tasks map screen" component={TaskMapScreen} />
    </SecondStack.Navigator>
  );
}
