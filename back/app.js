const express = require("express");
const { PrismaClient } = require("@prisma/client");
const http = require("http");
const socketIo = require("socket.io");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
// const io = socketIo(server);
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));

// Example route to fetch all posts:
const userRoutes = require("./routes/user");
const personRoutes = require("./routes/person");
const projectRoutes = require("./routes/project");
const siteRoutes = require("./routes/site");
const teamRoutes = require("./routes/team");
const taskRoutes = require("./routes/task");
const subTaskRoutes = require("./routes/subTask");

app.use("/api/v1", personRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", projectRoutes);
app.use("/api/v1", siteRoutes);
app.use("/api/v1", teamRoutes);
app.use("/api/v1", taskRoutes);
app.use("/api/v1", subTaskRoutes);

// Additional routes for creating, updating, and deleting posts would go here
const io = new socketIo.Server(server, {
  cors: {
    origin: "*", // Allow requests from all domains (for Socket.IO)
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies and other credentials
  },
});
var x = 0;
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("audioStream", (audioData) => {
    // Broadcast the received audio data to other clients
    console.log(audioData + x++);
    socket.broadcast.emit("audioStream", audioData);
  });
  socket.emit("test", "test");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const IP_ADDRESS = "192.168.56.1";
server.listen(port, IP_ADDRESS, () => {
  console.log(`Server listening on port ${port}`);
});
