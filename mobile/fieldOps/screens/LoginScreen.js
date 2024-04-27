import React, { useState } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import colors from "../themes/colors";
import fetchData from "../integrations/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardShow, setKeyboardShow] = React.useState();

  const onChangeEmail = (email) => {
    setEmail(email);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const login = async () => {
    const response = await fetchData.login({ email, password });
    console.log(response);
    navigation.navigate("Start screen");
  };
  return (
    <View style={style.screenContainer}>
      <Text style={style.heading}>Account configuration</Text>
      {!keyboardShow && <Image source={require("../assets/bro.png")} />}
      <View style={style.inputContainer}>
        <Text style={style.inputLabel}>E-mail</Text>
        <LoginInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder="example@companyname.dz"
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.inputLabel}>Password</Text>
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
      <Pressable onPress={login} style={style.button}>
        <Text style={style.buttonText}>Log in</Text>
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

const LoginInput = ({ value, onChangeText, placeholder, secureTextEntry }) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    cursorColor="black"
    placeholderTextColor="#999999"
    style={style.input}
  />
);

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
  heading: {
    fontFamily: "GilroyBold",
    fontSize: 28,
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
    flexDirection: "column",
    marginTop: 10,
  },
  inputLabel: {
    fontFamily: "GothamMedium",
    fontSize: 16,
  },
  input: {
    fontFamily: "GothamLight",
    color: "#999999",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: "#999999",
  },
  helpText: {
    fontFamily: "GothamLight",
    fontSize: 13,
    color: "#999999",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: colors.secondary[500],
    width: 150,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: "GothamMedium",
    fontSize: 16,
    textAlign: "center",
  },
  problemText: {
    fontFamily: "GothamLight",
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
