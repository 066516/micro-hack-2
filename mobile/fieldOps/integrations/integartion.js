import axios from "axios";
const apiUrl = "http://192.168.56.1:3000/api/v1";
const yourAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDExMDkxOH0.WjN4WiETkdOvlt65S33b8B_rlrtukOzdsh7yX6qcmPw";
const fetchData = {
  getData: async (route) => {
    try {
      const response = await axios.get(`${apiUrl}/${route}`, {
        headers: {
          // Include your headers here
          Authorization: `Bearer ${yourAccessToken}`,
          // Other headers if needed
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  postData: async (postData, route) => {
    const yourAccessToken = await SecureStore.getItemAsync("jwt");

    try {
      const response = await axios.post(`${config.apiUrl}/${route}`, postData, {
        headers: {
          // Include your headers here
          Authorization: `Bearer ${yourAccessToken}`,
          // Other headers if needed
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  },
};

export default fetchData;
