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
        <Text
          style={{
            fontFamily: "GilroyBold",
            textAlign: "center",
            fontSize: 28,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "GilroyBold",
            textAlign: "center",
            fontSize: 48,
            color: colors.primary[500],
          }}
        >
          FieldOps
        </Text>
      </View>
      <Image source={require("../assets/ilustration.png")}></Image>
      <Text
        style={{ fontFamily: "GothamLight", textAlign: "center", fontSize: 16 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Login screen")}
        style={style.button}
      >
        <Text style={{ fontFamily: "GothamMedium", textAlign: "center" }}>
          Log in
        </Text>
      </Pressable>
      <View>
      <Text
        style={{ fontFamily: "GothamLight", textAlign: "center", fontSize: 10 }}
      >
        Any problem?
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "GothamLight",
            textAlign: "center",
            fontSize: 10,
          }}
        >
          contact us:
        </Text>
        <Text
          style={{
            fontFamily: "GothamLight",
            textAlign: "center",
            fontSize: 10,
            color: colors.primary[500],
          }}
        >
          {" "}
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
  button: {
    backgroundColor: colors.secondary[500],
    width: 150,
    padding: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
