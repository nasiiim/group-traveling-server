
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


const allRoutes = require("./routes");
app.use("/api", allRoutes);




// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/", allRoutes);

const authRouter = require("./routes/auth.routes"); 
app.use("/auth", authRouter);


const tripRouter = require("./routes/trip.routes")
app.use("/trips", isAuthenticated, tripRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
