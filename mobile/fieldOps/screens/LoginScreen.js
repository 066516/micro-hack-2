import { useState } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import colors from "../themes/colors";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (email) => {
    setEmail(email);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };

  return (
    <View style={style.screenContainer}>
      <Text style={style.heading}>Account configuration</Text>
      <Image source={require("../assets/bro.png")} />
      <View style={style.inputContainer}>
        <Text style={style.inputLabel}>E-mail:</Text>
        <LoginInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder="example@companyname.dz"
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.inputLabel}>Password:</Text>
        <LoginInput
          value={password}
          onChangeText={onChangePassword}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Text style={style.helpText}>
        If you don’t have a password, address to the HR of your company to get
        your personal password.
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Start screen")}
        style={style.button}
      >
        <Text style={style.buttonText}>Log in</Text>
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

const LoginInput = ({ value, onChangeText, placeholder, secureTextEntry }) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    cursorColor="black"
    placeholderTextColor="black"
    style={style.input}
  />
);

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
});
