const socketIo = require("socket.io");
const ChatMessage = require("../models/ChatMessage"); // Adjust the path as needed

const registerSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "https://mern-chat-app-frontend-gl1h.onrender.com",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("sendMessage", async (messageData) => {
      try {
        const { sender, receiver, text } = messageData;

        const message = new ChatMessage({
          sender,
          receiver,
          text,
        });

        await message.save();

        io.emit("receiveMessage", message); // you can also send messageData if needed
      } catch (err) {
        console.error("Error saving message:", err);
        socket.emit("error", { msg: "Failed to send message" });
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = registerSocket;
