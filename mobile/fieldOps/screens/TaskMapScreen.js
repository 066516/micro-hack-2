import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TaskMap from "../components/TaskMap";
import colors from "../themes/colors";

export default function TaskMapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.shape}>
        <View style={styles.time}>
          <Text
            style={{
              width: "100%",
              color: "white",
              textAlign: "right",
              padding: 10,
            }}
          >
            20 apr
          </Text>
          <Text style={{ color: "white", textAlign: "right", padding: 10 }}>
            9:30 -------------------- 10:30
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <Text
              style={{
                color: "white",
                padding: 2,
                marginLeft: 20,
                fontSize: 18,
                textTransform: "capitalize",
              }}
            >
              task:
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Guests Orientation
            </Text>
          </View>
        </View>
        <View style={styles.pup}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "black", fontWeight: "600" }}>
              Description
            </Text>
            <Text>status </Text>
          </View>
          <Text>
            On iOS, audio playback and recording in background is only available
            in standalone apps, and it requires some extra configuration. On
            iOS, each background feature requires a special key in
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "red",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                canceled
              </Text>
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "green",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TaskMap />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  shape: {
    width: "100%",
    height: "30%",
    backgroundColor: colors.primary[700],
    position: "relative",
    display: "flex",
    alignItems: "center",
    zIndex: 3,
  },
  pup: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    zIndex: 3,
    borderRadius: 20,
    padding: 10,
  },
  time: {
    width: "100%",
    textAlign: "left",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
