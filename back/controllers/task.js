const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTask = async (req, res) => {
  try {
    const { name, description, type, dueDate, projectId, siteId } = req.body;
    const task = await prisma.task.create({
      data: {
        name,
        description,
        type,
        dueDate,
        project: { connect: { id: projectId } },
        site: { connect: { id: siteId } },
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Error creating task." });
  }
};
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      select: {
        type: true,
        description: true,
        name: true,
        project: true,
        subTask: true,
        // duration: true,
        dueDate: true,
        duration: true,
        site: true,
        status: true,
      },
    });

    res.status(201).json(tasks);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Error fetching task." });
  }
};
