const ChatMessage = require("../../models/ChatMessage");

exports.getChats = async (req, res) => {
  try {
    const { sender, receiver } = req.query; // or req.query if using GET

    console.log(sender, "hello");
    console.log(receiver);
    const messages = await ChatMessage.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender }, // <-- this line was missing
      ],
    }).sort({ createdAt: 1 }); // Sort by timestamp in ascending order
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to retrieve messages", error });
  }
};
