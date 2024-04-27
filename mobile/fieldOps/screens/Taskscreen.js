import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useFonts } from "expo-font";
import Fonts from "../themes/fonts";
import colors from "../themes/colors";
import { Image } from "react-native";
import TaskCircle from "../icons/Circle";
import TaskCard from "../components/TaskCard";
import TaskLine from "../components/TaskLine";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";

export default function TasksScreen({ navigation }) {
  const taskprops = [
    //a table of what could task properties be like
    {
      title: "Guests Orientation",
      status: "Pending",
      taskType: "Task’s Type",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...",
      location: "Bab Ezzouar, Algiers",
      timeLimit: "Only 2h for this task, you’ve to approve it before 9:00",
    },
    {
      title: "Project Presentation",
      status: "Progress",
      taskType: "Presentation",
      description:
        "Present the project updates to the stakeholders. Prepare slides and data analysis.",
      location: "Conference Room",
      timeLimit: "45 minutes",
    },
    {
      title: "Team Meeting",
      status: "Done",
      taskType: "Meeting",
      description:
        "Discuss the current progress of the project and assign tasks for the next sprint.",
      location: "Virtual (Zoom)",
      timeLimit: "1 hour",
    },
    {
      title: "Report Submission",
      status: "Pending",
      taskType: "Report",
      description:
        "Submit the weekly progress report to the project manager before the deadline.",
      location: "Email",
      timeLimit: "Due by Friday, 5:00 PM",
    },
  ];

  const dayTasks = [
    //a table with the order of the days (exp: DayTasks[0] contains the tasks of the very first day in the agenda carousel)
    taskprops,
    [
      ...taskprops,
      {
        title: "Guests Orientation",
        status: "Pending",
        taskType: "Task’s Type",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...",
        location: "Bab Ezzouar, Algiers",
        timeLimit: "Only 2h for this task, you’ve to approve it before 9:00",
      },
    ],
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
    taskprops,
  ];
  const name = "Mr. Daniel";
  const department = "Logistics";
  const team = "team";
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState(10);
  const [fontsLoaded] = useFonts(Fonts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  function getPreviousNextDays() {
    const days = [];
    const millisecondsInADay = 86400000;
    const todayTimestamp = currentDate.getTime();

    for (let i = -10; i <= 10; i++) {
      const newDate = new Date(todayTimestamp + i * millisecondsInADay);
      days.push({
        day: newDate.getDate(),
        weekday: newDate.toLocaleDateString("en-US", { weekday: "short" }),
        month: newDate.toLocaleDateString("en-US", { month: "short" }),
      });
    }
    return days;
  }

  const days = getPreviousNextDays();
  function renderCarouselComponent({ item, index }) {
    const isSelected = index === selected;
    return (
      <Pressable
        style={{
          ...styles.itemContainer,
          backgroundColor: isSelected ? colors.secondary[300] : "white",
          height: isSelected ? 110 : 95,
        }}
        onPress={() => {
          setSelected(index);
        }}
      >
        {index == 10 && <Text style={styles.itemTextToday}>Today</Text>}
        <Text style={styles.itemText}>{item.weekday}</Text>
        <Text style={styles.itemTextDay}>{item.day}</Text>
        <Text style={styles.itemText}>{item.month}</Text>
      </Pressable>
    );
  }

  if (!fontsLoaded || isLoading) {
    return <ActivityIndicator style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/profileTop.png")}
      />
      <View style={styles.header}>
        <TaskCircle />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{name}</Text>
          <Text style={styles.subHeaderText}>
            {department + " department " + " ● " + team + " team"}
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", marginHorizontal: 10 }}
      >
        <ProgressBar percentage={80}></ProgressBar>
        <Text style={styles.todayText}>Today's tasks</Text>
        <Carousel
          firstItem={9}
          data={getPreviousNextDays()}
          renderItem={renderCarouselComponent}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={90}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          pagingEnabled
          style={styles.carousel}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 25,
          }}
        >
          {dayTasks[selected].map((item, index) => (
            <TaskItem
              taskprops={item}
              isFirst={index == 0}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    paddingTop: 140,
    backgroundColor: colors.background,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    marginHorizontal: 5,
    flexDirection: "column",
    borderRadius: 15,
    padding: 8,
  },
  itemText: {
    fontSize: 13,
    fontFamily: "GilroyMedium",
  },
  itemTextDay: {
    fontSize: 16,
    fontFamily: "GilroyBold",
  },
  itemTextToday: {
    fontSize: 14,
    fontFamily: "GilroyMedium",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    top: 0,
    resizeMode: "cover",
  },
  header: {
    position: "absolute",
    top: 30,
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "flex-start",
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "GilroyMedium",
  },
  subHeaderText: {
    fontSize: 10,
    fontFamily: "GilroyLight",
  },
  todayText: {
    fontSize: 20,
    fontFamily: "GilroyMedium",
    marginBottom: 20,
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
