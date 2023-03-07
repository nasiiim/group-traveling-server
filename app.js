const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

// require("dotenv").config();
require("dotenv/config");
// ℹ️ Connects to the database
require("./db");

const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))




// 👇 Start handling routes here
// const allRoutes = require("./routes");
// app.use("/", allRoutes);




const tripRouter = require("./routes/trip.routes")
app.use("/api", tripRouter)

const authRouter = require("./routes/auth.routes"); 
app.use("/auth", authRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
