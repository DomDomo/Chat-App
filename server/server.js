const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`You are listening to port ${port}`);
});

app.get("/", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.get("/contact", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../public", "contact.html"));
});
