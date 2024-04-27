import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./navigation/TabNav";
import StartNav from "./navigation/StartNav";
import { PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <TabNav></TabNav>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
