const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("A new user connected");

  socket.on("disconnect", () => {
    console.log("User was disconnected from the");
  });
});

server.listen(port, () => {
  console.log(`You are listening to port ${port}`);
});

app.get("/", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.get("/contact", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "contact.html"));
});
