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

server.listen(port, (err) => {
  err ? console.error(err) : open(`http://localhost:${port}`); // eslint-disable-line no-console
});
