const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

exports.createPerson = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(409).send({ message: "Email already in use." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const person = await prisma.person.create({
      data: {
        userId: user.id,
        role,
        locationX: 0,
        locationY: 0,
        // teamId: team,
      },
      select: {
        user: true,
        role: true,
        locationX: true,
        locationY: true,
      },
    });

    const token = jwt.sign(
      { userId: user.id, role: role },
      process.env.JWT_SECRET
    );

    res.json({ token, person });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating user." });
  }
};
exports.getAllPersons = async (req, res) => {
  try {
    const users = await prisma.person.findMany({
      select: {
        user: true,
        role: true,
        locationX: true,
        locationY: true,
      },
    });

    res.json(users);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving user details." });
  }
};
