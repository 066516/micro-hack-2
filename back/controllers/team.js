const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTeam = async (req, res) => {
  try {
    const { name, expertise } = req.body;
    const team = await prisma.team.create({
      data: { name, expertise },
    });

    res.status(201).json(team);
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ message: "Error creating team." });
  }
};
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      select: { id: true, name: true, expertise: true, members: true ,projects: true},

    });

    res.status(201).json(teams);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ message: "Error fetching team." });
  }
};

exports.assignedToProject = async (req, res) => {
  try {
    const { teamID, projectID } = req.body;
    var team = await prisma.team.findUnique({
      where: { id: teamID },
    });
    if (!team) {
      return res.status(404).json({ message: "team not found" });
    }
    team = await prisma.team.update({
      where: { id: teamID }, // Specify the ID of the team you want to update
      data: {
        projects: {
          // Specify the project you want to connect to the team
          connect: {
            id: projectID, // Assuming the ID of the project you want to connect to the team
          },
        },
      },
      select: {
        projects: true,
      },
    });

    res.status(201).json(team);
  } catch (error) {
    console.error("Error assigned team:", error);
    res.status(500).json({ message: "Error assigned team." });
  }
};
