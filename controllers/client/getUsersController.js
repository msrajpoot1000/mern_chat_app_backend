const User = require("../../models/User");
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "_id username"); // Only select _id and username
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
