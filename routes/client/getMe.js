const express = require("express");
const router = express.Router();
const { getMe } = require("../../controllers/client/getMeController");

// Route to get all users' ID and username
router.get("/", getMe);

module.exports = router;
