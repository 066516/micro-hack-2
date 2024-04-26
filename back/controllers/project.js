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
    const projects = await prisma.project.findMany({
      select: { id: true, name: true, teams: true ,sites:true,tasks:true},
    });

    res.status(201).json(projects);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Error fetching project." });
  }
};
exports.updateProject = async (req, res) => {
  try {
    const { name, description, site, id } = req.body;
    const project = await prisma.project.update({
      where: { id },
      data: {
        name,
        description,
        sites: {
          connect: await prisma.site.findUnique({ where: { id: site } }),
        },
      },
      select: {
        sites: true,
        name: true,
        description: true,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Error updating project." });
  }
};
