import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://192.168.137.1:3000");

export default function App() {
  const audioRef = useRef(new Audio());

  useEffect(() => {
    socket.on("audioStream", (audioData) => {
      // Play received audio data
      const audioBlob = new Blob([audioData.audioData], { type: "audio/wav" });
      const audioURL = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioURL;
      audioRef.current.play();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <div>Hello, World!</div>
      <audio ref={audioRef} controls />
    </div>
  );
}
