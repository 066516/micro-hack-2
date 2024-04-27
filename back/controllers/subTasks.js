const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createSubTask = async (req, res) => {
  try {
    const { taskId, personId } = req.body;
    const existingSubTask = await prisma.subTask.findFirst({
      where: { personId: personId, taskId: taskId },
    });
    if (existingSubTask) {
      return res
        .status(409)
        .json({ message: "person already assigned in this task" });
    }
    const subTask = await prisma.subTask.create({
      data: {
        subTaskFor: { connect: { id: taskId } },
        assignedTo: { connect: { id: personId } },
      },
    });

    res.status(201).json(subTask);
  } catch (error) {
    console.error("Error creating subTask:", error);
    res.status(500).json({ message: "Error creating subTask." });
  }
};
exports.getAllSubTasks = async (req, res) => {
  try {
    const subTasks = await prisma.subTask.findMany({
      select: { assignedTo: true, status: true, taskId: true },
    });

    // Grouping the subTasks by taskId
    const groupedSubTasks = subTasks.reduce((acc, subTask) => {
      const taskId = subTask.taskId;
      if (!acc[taskId]) {
        acc[taskId] = [];
      }
      acc[taskId].push(subTask);
      return acc;
    }, {});

    // Now groupedSubTasks will contain an object where keys are taskIds and values are arrays of subTasks with the same taskId

    res.status(201).json(groupedSubTasks);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Error fetching task." });
  }
};
