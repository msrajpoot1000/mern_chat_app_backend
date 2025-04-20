const express = require("express");
const router = express.Router();
const { getUsers } = require("../../controllers/client/getUsersController");

// Route to get all users' ID and username
router.get("/", getUsers);


module.exports = router;
