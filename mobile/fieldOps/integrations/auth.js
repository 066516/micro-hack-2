import axios from "axios";
import config from "../config";
import * as SecureStore from "expo-secure-store"; // Use this for Expo
const fetchData = {
  login: async (postData) => {
    console.log(postData);
    try {
      const response = await axios.post(`${config.apiUrl}/login`, postData);
      return response.data;
    } catch (error) {
      console.error("Error login:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`${config.apiUrl}/logout`);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },
  getUser: async () => {
    const yourAccessToken = await SecureStore.getItemAsync("jwt");
    console.log("token: ", yourAccessToken);
    try {
      const response = await axios.get(`${config.apiUrl}/user`, {
        headers: {
          // Include your headers here
          Authorization: `Bearer ${yourAccessToken}`,
          // Other headers if needed
        },
      });
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting data:", error);
      throw error;
    }
  },
};

export default fetchData;
