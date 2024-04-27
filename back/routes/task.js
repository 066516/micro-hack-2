const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { authorizeAdmin, authenticate } = require("../middleware/authenticate");
router.post("/task", authenticate, authorizeAdmin, taskController.createTask);
router.get("/task", taskController.getAllTasks);
module.exports = router;
