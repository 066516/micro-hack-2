const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

router.post("/person", personController.createPerson);
router.post("/person/assigned", personController.assignedToTeam);
router.get("/person", personController.getAllPersons);
module.exports = router;
