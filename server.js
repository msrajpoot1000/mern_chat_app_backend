const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const connectDB = require("./config/db");
const registerSocket = require("./socket/chatSocket");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth/authRoutes"));
app.use("/users", require("./routes/client/getUsersRoutes"));
app.use("/get-me", require("./routes/client/getMe"));
app.use("/get-chats", require("./routes/client/getChatsRoute"));
// Create server
const server = http.createServer(app);

// Initialize socket.io
registerSocket(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
