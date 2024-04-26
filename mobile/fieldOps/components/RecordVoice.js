import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Audio } from "expo-av";

export default function Record() {
  const [recording, setRecording] = useState();
  const [sound, setSound] = useState(null);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);

    // Create a new sound object to play the recorded audio
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
  }

  async function playRecording() {
    if (sound) {
      await sound.playAsync();
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button title="Play Recording" onPress={playRecording} />
      <Text style={{ color: "red", padding: 5 }}>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
