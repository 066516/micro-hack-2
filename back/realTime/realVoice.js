exports.Voice = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("audioStream", (audioData) => {
      // Broadcast the received audio data to other clients
      socket.broadcast.emit("audioStream", audioData);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
