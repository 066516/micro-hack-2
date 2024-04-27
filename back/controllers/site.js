const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createSite = async (req, res) => {
  try {
    const { name, address, coordinatesX, coordinatesY } = req.body;
    const site = await prisma.site.create({
      data: { name, address, coordinatesX, coordinatesY },
    });

    res.status(201).json(site);
  } catch (error) {
    console.error("Error creating site:", error);
    res.status(500).json({ message: "Error creating site." });
  }
};
exports.getAllSites = async (req, res) => {
  try {
    const sites = await prisma.site.findMany({
      select: { address: true, name: true, projects: true },
    });

    res.status(201).json(sites);
  } catch (error) {
    console.error("Error fetching site:", error);
    res.status(500).json({ message: "Error fetching site." });
  }
};
