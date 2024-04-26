const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Example route to fetch all posts:
app.get("/users", async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// Additional routes for creating, updating, and deleting posts would go here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
