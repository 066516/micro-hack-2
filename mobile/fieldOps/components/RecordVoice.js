import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { Audio } from "expo-av";
import io from "socket.io-client";

const socket = io("http://192.168.137.1:3000");

export default function Record() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  useEffect(() => {
    if (permissionResponse && permissionResponse.status !== "granted") {
      requestPermission();
    }
  }, [permissionResponse, requestPermission]);

  async function startRecording() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(newRecording);
      await newRecording.startAsync();
      console.log("Recording started");

      // Send audio stream to server
      newRecording.setOnRecordingStatusUpdate((status) => {
        if (status.isRecording && status.durationMillis > 0) {
          socket.emit("audioStream", { audioData: status });
          console.log("recording");
        }
      });
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  }

  async function stopRecording() {
    try {
      await recording.stopAndUnloadAsync();
      console.log("Recording stopped");

      // Reset recording state
      setRecording(null);
    } catch (error) {
      console.error("Failed to stop recording:", error);
    }
  }

  return (
    <View>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
        disabled={permissionResponse && permissionResponse.status !== "granted"}
      />
    </View>
  );
}
