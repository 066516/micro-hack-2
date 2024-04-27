const express = require("express");
const router = express.Router();
const subTaskController = require("../controllers/subTasks");
const { authorizeAdmin, authenticate } = require("../middleware/authenticate");
router.post(
  "/subTask",
  authenticate,
  authorizeAdmin,
  subTaskController.createSubTask
);
router.get(
  "/subTask",
  authenticate,
  authorizeAdmin,
  subTaskController.getAllSubTasks
);
module.exports = router;
