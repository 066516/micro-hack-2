const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
app.use(express.json());
// Example route to fetch all posts:
const userRoutes = require("./routes/user");
const personRoutes = require("./routes/person");
const projectRoutes = require("./routes/project");
app.use("/api/v1", personRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", projectRoutes);
// Additional routes for creating, updating, and deleting posts would go here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
