import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../themes/colors";

export default function StartScreen({navigation}){
    const name="Daniel"
    return(
        <View style={style.screenContainer}>
            <Text style={style.heading}>Welcome</Text>
            <Text style={style.name}>Mr. {name}</Text>
            <Image source={require("../assets/illustation3.png")}></Image>
            <Pressable
        onPress={() => navigation.navigate("Tab screen")}
        style={style.button}
      >
        <Text style={{ fontFamily: "GothamMedium", textAlign: "center" }}>
          Log in
        </Text>
      </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
  screenContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    height: "100%",
    paddingVertical: 20,
  },
  heading: {
    fontFamily: "GilroyBold",
    textAlign: "center",
    fontSize: 28,
  },
  name: {
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontSize: 28,
  },
  inputContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  inputLabel: {
    fontFamily: "GothamMedium",
    textAlign: "left",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: "#999999",
    fontFamily: "GothamLight",
    color: "#999999",
  },
  helpText: {
    fontFamily: "GothamLight",
    textAlign: "left",
    fontSize: 13,
    color: "#999999",
    marginHorizontal: 30,
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
  buttonText: {
    fontFamily: "GothamMedium",
    textAlign: "center",
    fontSize: 16,
  },


})