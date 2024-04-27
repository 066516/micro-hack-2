import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../themes/colors";

export default function StartScreen({ navigation }) {
  const name = "Daniel";
  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.heading}>Welcome</Text>
        <Text style={style.name}>Mr. {name}</Text>
      </View>
      <Image source={require("../assets/illustation3.png")} />
      <View>
        <Text style={style.logged}>You've logged in</Text>
        <Text style={style.successfully}>successfully!</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Tab screen")}
        style={style.button}
      >
        <Text style={style.buttonText}>Let's start</Text>
      </Pressable>
      <View style={style.contactContainer}>
        <Text style={style.problemText}>Any problem?</Text>
        <View style={style.contactInfoContainer}>
          <Text style={style.contactLabel}>contact us:</Text>
          <Text style={style.contactEmail}>ourEmail@email.com</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
  heading: {
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontSize: 32,
    color: "#414141",
  },
  name: {
    fontFamily: "GilroyRegular",
    textAlign: "center",
    fontSize: 28,
    color: colors.primary[700],
  },
  logged: {
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontSize: 24,
    color: "#5B5B5B",
  },
  successfully: {
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontSize: 28,
    color: colors.tertiary[500],
  },
  button: {
    backgroundColor: colors.secondary[500],
    width: 180,
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: "GothamMedium",
    textAlign: "center",
    fontSize: 16,
  },
  problemText: {
    fontFamily: "GothamLight",
    textAlign: "center",
    fontSize: 10,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  contactInfoContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  contactLabel: {
    fontFamily: "GothamLight",
    fontSize: 10,
  },
  contactEmail: {
    fontFamily: "GothamLight",
    fontSize: 10,
    color: colors.primary[500],
  },
});
