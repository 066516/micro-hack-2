import React, { useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default function HomeScreen() {
  // Import Axios library
  // URL to fetch data from
  const apiUrl = "http://192.168.137.1:3000/api/v1/users";

  // Making a GET request using Axios
  axios
    .get(apiUrl)
    .then((response) => {
      // Handle successful response
      console.log("Data:", response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching data:", error);
    });

  return (
    <View>
      <Text>home</Text>
    </View>
  );
}
