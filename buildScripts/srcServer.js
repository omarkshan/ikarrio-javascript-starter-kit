"use strict";
import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const server = express();
const compiler = webpack(config);

server.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

server.get("/users", (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Tammy", lastName: "Norton", email: "tammy@gmail.com" },
    { id: 3, firstName: "Tina", lastName: "Lee", email: "tina@gmail.com" },
  ]);
});

server.listen(port, (err) => {
  err ? console.error(err) : open(`http://localhost:${port}`); // eslint-disable-line no-console
});
