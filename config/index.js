const express = require("express");

const logger = require("morgan");


const cookieParser = require("cookie-parser");


const cors = require("cors");
// ℹ️ global package used to `normalize` paths amongst different operating systems
// https://www.npmjs.com/package/path
// const path = require("path");

// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: ["http://localhost:3006"],
    })
  );
  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

};
