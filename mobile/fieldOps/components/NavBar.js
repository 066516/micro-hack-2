import { View, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Home from "../icons/Home";
import { Svg } from "react-native-svg";
import Tasks from "../icons/Tasks";
import Voice from "../icons/Voice";
import Map from "../icons/Map";
import Profile from "../icons/Profile";

export default function NavBar({ state, descriptors, navigation }) {
  return (
    <View style={style.bottomBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.iconContainer}
          >
            <Svg
              width={27}
              height={28}
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Icon name={label} color={isFocused ? "black" : "white"}></Icon>
            </Svg>
            <Text>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Icon({ name, color }) {
  switch (name) {
    case "Home":
      return <Home color={color}></Home>;
    case "Tasks":
      return <Tasks color={color}></Tasks>;
    case "Voice":
      return <Voice color={color}></Voice>;
    case "Map":
      return <Map color={color}></Map>;
    case "Profile":
      return <Profile color={color}></Profile>;
  }
}

const style = StyleSheet.create({
  bottomBarContainer: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
