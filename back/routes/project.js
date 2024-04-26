const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project");
const { authorizeAdmin, authenticate } = require("../middleware/authenticate");
router.post(
  "/project",
  authenticate,
  authorizeAdmin,
  projectController.createProject
);
router.get(
  "/project",
  authenticate,
  authorizeAdmin,
  projectController.getAllProjcts
);
module.exports = router;
