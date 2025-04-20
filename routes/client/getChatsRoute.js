const express = require("express");
const router = express.Router();
const { getChats } = require("../../controllers/client/getChatsController");

// Route to get all users' ID and username
router.get("/", getChats
);

module.exports = router;
