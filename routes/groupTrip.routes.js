const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Trip = require("../models/group-trip.model")


//create new trip
router.post("/trips", (req, res, next) => {
    const { creatorId, startDate, endDate, destination } = req.body

    Trip.create({ startDate, endDate, destination, creator: creatorId, subscriber: [] })
    .then((response) => res.json(response) )
    .catch((err) => res.json(err))
})