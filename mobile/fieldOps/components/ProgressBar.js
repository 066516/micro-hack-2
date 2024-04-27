import { Text, View } from "react-native";
import colors from "../themes/colors";

export default function ProgressBar({ percentage }) {
  var fillolor = "white";
  var borderColor = "black";
  const fullWidth = 300;
  const filledWidth = (fullWidth * percentage) / 100 - 2;
  const fillColor = (value) => {
    switch(value){
        case value>=0 && value<40: return "#414141"
        case value >=40 && value <60 : return colors.primary[700]
        case value >=60 && value <=100: return colors.tertiary[500]
    }
  };
  return (
    <View>
      <Label />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 300,
            alignSelf: "center",
            borderRadius: 8,
            height: 10,
            backgroundColor: "white",
            borderColor: borderColor,
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: "flex-start",
              height: 10,
              borderRadius: 8,
              width: filledWidth,
              backgroundColor: fillColor,
            }}
          ></View>
        </View>
        <Text>{percentage + "%"}</Text>
      </View>
    </View>
  );
}

function Label({ text }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
