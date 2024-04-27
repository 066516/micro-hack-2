import { View } from "react-native";
import colors from "../themes/colors";

export default function TaskLine({ isFirst }) {
  console.log(isFirst)
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        marginLeft: 15,
      }}
    >
      {isFirst ? (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderRadius: 100,
            width: 16,
            height: 16,
            borderColor: colors.primary[500],
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              backgroundColor: colors.primary[300],
              width: 8,
              height: 8,
            }}
          ></View>
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            borderWidth: 2.5,
            borderColor: colors.primary[700],
            width: 10,
            height: 10,
          }}
        ></View>
      )}
      <View
        style={{ height: 200, width: 3, backgroundColor: colors.primary[300] }}
      ></View>
    </View>
  );
}
