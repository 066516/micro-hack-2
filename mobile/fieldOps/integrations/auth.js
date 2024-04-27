import axios from "axios";

const apiUrl = "http://192.168.0.146:3000/api/v1";

const fetchData = {
  login: async (postData) => {
    console.log(postData);
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, postData);
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
