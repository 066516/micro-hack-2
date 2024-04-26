const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProject = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, description } = req.body;
    const project = await prisma.project.create({
      data: { name, description, userId },
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Error creating project." });
  }
};
exports.getAllProjcts = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({});

    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Error fetching project." });
  }
};
