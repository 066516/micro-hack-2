const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site");
const { authorizeAdmin, authenticate } = require("../middleware/authenticate");
router.post("/site", authenticate, authorizeAdmin, siteController.createSite);
router.get("/site", authenticate, authorizeAdmin, siteController.getAllSites);
module.exports = router;
