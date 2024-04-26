import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import { RTCPeerConnection, RTCView, mediaDevices } from "react-native-webrtc";

export default function WebRtc() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    setupLocalStream();
    setupPeerConnection();
  }, []);

  const setupLocalStream = async () => {
    const stream = await mediaDevices.getUserMedia({ audio: true });
    setLocalStream(stream);
  };

  const setupPeerConnection = () => {
    const pc = new RTCPeerConnection();

    pc.onaddstream = (event) => {
      setRemoteStream(event.stream);
    };

    if (localStream) {
      pc.addStream(localStream);
    }

    setPeerConnection(pc);
  };

  const startCall = async () => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    // Send offer to the other peer
  };

  const answerCall = async () => {
    // Receive offer from the other peer
    // Set remote description with the received offer
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    // Send answer to the other peer
  };

  return (
    <View>
      <Button title="Start Call" onPress={startCall} />
      <Button title="Answer Call" onPress={answerCall} />
      <View>
        {localStream && <RTCView streamURL={localStream.toURL()} />}
        {remoteStream && <RTCView streamURL={remoteStream.toURL()} />}
      </View>
    </View>
  );
}
