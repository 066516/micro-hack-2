import React, { useEffect, useRef } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo-av";
import io from "socket.io-client";

const socket = io("http://192.168.137.1:3000");

export default function Listen() {
  const audioRef = useRef(new Audio.Sound());

  useEffect(() => {
    socket.on("audioStream", async (audioData) => {
      console.log("wslt");
      try {
        if (audioData && audioData.audioURL) {
          // Decode the audio data received from the server
          await Audio.Sound.loadAsync({ uri: audioData.audioURL }, {}, true);
          await audioRef.current.playAsync();
        } else {
          console.error("Invalid audio data received:", audioData);
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View>
      <Button title="Listen to Audio" onPress={() => {}} />
    </View>
  );
}
