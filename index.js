// outside resources
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

// custom files
const projectRouter = require("./routers/projectRouter");
const actionRouter = require("./routers/actionRouter");

// local constants
const server = express();
const PORT = 4000;

// global middleware
server.use(express.json(), helmet(), logger("dev"));

// route handling
server.use("/projects", projectRouter);
server.use("/actions", actionRouter);

// listening
server.listen(PORT, () => {
  console.log(`This is my app, yo! See it in action at port ${PORT}`);
});
