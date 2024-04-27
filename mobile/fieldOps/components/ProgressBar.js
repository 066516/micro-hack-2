import React, { useState } from "react";
import React, { useState } from "react";
import { Text, View } from "react-native";
import colors from "../themes/colors";

export default function ProgressBar({ percentage }) {
  const fullWidth = 300;
  const filledWidth = ((fullWidth * percentage) / 100) - 2;
  const [fillColor, setFillColor] = useState("white");
  const [text, setText] = useState("");
  function colorPicker(value) {
    if (value > 0 && value < 40) {
      return "#414141";
    } else if (value >= 40 && value < 60) {
      return colors.primary[700];
    } else if (value >= 60 && value <= 100) {
      return colors.tertiary[500];
  const filledWidth = ((fullWidth * percentage) / 100) - 2;
  const [fillColor, setFillColor] = useState("white");
  const [text, setText] = useState("");
  function colorPicker(value) {
    if (value > 0 && value < 40) {
      return "#414141";
    } else if (value >= 40 && value < 60) {
      return colors.primary[700];
    } else if (value >= 60 && value <= 100) {
      return colors.tertiary[500];
    }
  }

  function labelPicker(value) {
    if (value > 0 && value < 20) {
      return "You just started today’s tasks !";
    } else if (value >= 20 && value < 40) {
      return "Good progress, keep going !";
    } else if (value >= 40 && value <= 60) {
      return "Your today’s tasks are half done !";
    } else if (value >= 60 && value < 100) {
      return "Your today’s tasks are almost done !";
    } else if (value == 100) {
      return "Your today’s tasks are all done !";
    }
  }

  React.useEffect(() => {
    setFillColor(colorPicker(percentage));
    setText(labelPicker(percentage));
  }, [percentage]);

  return (
    <View style={{display:"flex"}}>
      <Label text={text} />
    <View style={{display:"flex"}}>
      <Label text={text} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            width: 300,
            borderRadius: 8,
            height: 10,
            backgroundColor: "white",
            borderColor: "black",
            borderColor: "black",
            borderWidth: 1,
            alignContent: "center",
            justifyContent: "center",
            marginRight: 20,
            alignContent: "center",
            justifyContent: "center",
            marginRight: 20,
          }}
        >
          <View
            style={{
              height: 9,
              height: 9,
              borderRadius: 8,
              width: filledWidth,
              backgroundColor: fillColor,
            }}
          ></View>
        </View>
        <Text style={{ marginRight: 20 }}>{percentage + "%"}</Text>
        <Text style={{ marginRight: 20 }}>{percentage + "%"}</Text>
      </View>
    </View>
  );
}

function Label({ text }) {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={{ color: "#262626", fontFamily: "GilroyMedium", fontSize:18 }}>
        {text}
      </Text>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={{ color: "#262626", fontFamily: "GilroyMedium", fontSize:18 }}>
        {text}
      </Text>
    </View>
  );
}