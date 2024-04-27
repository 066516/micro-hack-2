import { View, Text } from "react-native";
import TaskLine from "./TaskLine";
import TaskCard from "./TaskCard";

export default function TaskItem({ isFirst, taskprops }) {
    const task = taskprops;
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 17, fontFamily: "GilroyMedium" }}>start</Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "GilroyMedium",
              color: "#747474",
            }}
          >
            end
          </Text>
        </View>
        <TaskLine isFirst={isFirst} />
        <TaskCard taskprops={task} />
      </View>
    );
  }