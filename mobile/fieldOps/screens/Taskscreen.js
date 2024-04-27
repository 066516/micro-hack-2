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
import fetchData from "../integrations/integartion";

export default function TasksScreen({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData.getData("task");
        // console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(data);

  const percentage = 80; //percentage of task progress, will be fetched

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
    //getting the previous and next 10 days for the agenda carousel
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
        <ProgressBar percentage={percentage}></ProgressBar>
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
          {data?.map((item, index) => (
            <TaskItem
              key={index}
              taskprops={item}
              isFirst={index == 0}
              onPress={() => {
                navigation.navigate("Tasks map screen", item);
              }}
            ></TaskItem>
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
    paddingTop: 150,
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
