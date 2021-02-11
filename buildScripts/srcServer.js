const express = require("express");
const path = require("path");
const open = require("open");

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

server.listen(port, (err) => {
  err ? console.error(err) : open(`http://localhost:${port}`);
});
