const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team");
const { authorizeAdmin, authenticate } = require("../middleware/authenticate");
router.post("/team", authenticate, authorizeAdmin, teamController.createTeam);
router.post(
  "/team/assigned",
  authenticate,
  authorizeAdmin,
  teamController.assignedToProject
);
router.get("/team", authenticate, authorizeAdmin, teamController.getAllTeams);
module.exports = router;
