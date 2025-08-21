const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
//initiate socket.io and attach this to the http server
const io = socketIo(server);
app.use(express.static("public")); // Serve static files from the public directory
const users = new Set();
io.on("Connection", (socket) => {
  console.log("A user connected:", socket.id);
  //handle users when they will join the chat
  socket.on("join", (username) => {
    users.add(username);
    //broadcast to alll client / users that a new user has joined
    io.emit("userJoined", username);
  });
  // send the updated userlist to all the client
  io.emit("userList", Array.from(users));
  //handle incoming chat message
  socket.on("chatMessage", (message) => {
    //broadcast the message to all clients
    io.emit("chatMessage", { user: socket.id, message });
  });
  //handle user disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    users.forEach((user) => {
      if (user === socket.userName) {
        users.delete(user);
        io.emit("userLeft", user);
        io.emit("userList", Array.from(users));
      }
    });
  });
});
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
