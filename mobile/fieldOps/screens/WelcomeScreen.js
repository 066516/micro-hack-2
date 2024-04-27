import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../themes/fonts";
import { ActivityIndicator } from "react-native-paper";
import colors from "../themes/colors";

export default function WelcomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={style.screenContainer}>
      <View>
        <Text style={style.heading}>
          Welcome to
        </Text>
        <Text style={style.appName}>
          FieldOps
        </Text>
      </View>
      <Image source={require("../assets/ilustration.png")} />
      <Text style={style.infoText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Login screen")}
        style={style.button}
      >
        <Text style={style.buttonText}>
          Log in
        </Text>
      </Pressable>
      <View>
        <Text style={style.problemText}>
          Any problem?
        </Text>
        <View style={style.contactContainer}>
          <Text style={style.contactLabel}>
            contact us:
          </Text>
          <Text style={style.contactEmail}>
            ourEmail@email.com
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 20,
    paddingHorizontal: 30,
  },
  heading: {
    fontFamily: "GilroyBold",
    textAlign: "center",
    fontSize: 28,
    marginHorizontal:20,
  },
  appName: {
    fontFamily: "GilroyBold",
    textAlign: "center",
    fontSize: 48,
    color: colors.primary[500],
  },
  infoText: {
    fontFamily: "GothamLight",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.secondary[500],
    width: 150,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: "GothamMedium",
    textAlign: "center",
  },
  problemText: {
    fontFamily: "GothamLight",
    textAlign: "center",
    fontSize: 10,
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contactLabel: {
    fontFamily: "GothamLight",
    textAlign: "center",
    fontSize: 10,
  },
  contactEmail: {
    fontFamily: "GothamLight",
    textAlign: "center",
    fontSize: 10,
    color: colors.primary[500],
  },
});
