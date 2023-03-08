const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Trip = require("../models/Trip.model")
const { isAuthenticated } = require("../middleware/jwt.middleware");



//create new trip
router.post("/trips", (req, res, next) => {
    const { creatorId, startDate, endDate, destination } = req.body

    Trip.create({ creatorId, startDate, endDate, destination })
        .then((response) => res.json(response))
        .catch((err) => res.json(err))
})

//get all of the trips
router.get("/trips", isAuthenticated, (req, res, next) => {
    console.log(`req.payload`, req.payload);
    const type = req.query.type;
    const destination = req.query.destination
    if (type === 'own') {
        const userId = req.payload._id
        Trip.find({ "creatorId": userId })
            // .populate("creatorId")
            .then((filteredTrips) => res.json(filteredTrips))
            .catch((err) => res.json(err))
    } else if (type === 'all') {
        Trip.find()
            // .populate("subscriber")
            .then((allTrips) => res.json(allTrips))
            .catch((err) => res.json(err))
    }
    else if (destination) {
        Trip.find({ "destination": new RegExp(destination, 'i') })
            .then((trip) => res.json(trip))
            .catch((err) => res.json(err))
    }

})

// get a specific trip by id
router.get("/trips/:tripId", (req, res, next) => {
    const { tripId } = req.params
    if (!mongoose.Types.ObjectId.isValid(tripId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }

    Trip.findById(tripId)
        // .populate("subscriber")
        .then((trip) => res.status(200).json(trip))
        .catch((err) => res.json(err))
})







//update a trip by id
router.put("/trips/:tripId", (req, res, next) => {
    const { tripId } = req.params

    if (!mongoose.Types.ObjectId.isValid(tripId)) {
        res.status(400).json({ message: "Specified id is not valid" })
        return
    }


    Trip.findByIdAndUpdate(tripId, req.body, { new: true })
        .then((updatedTrip) => res.json(updatedTrip))
        .catch((err) => res.json(err))
})



//delete a trip by id
router.delete("/trips/:tripId", (req, res, next) => {
    const { tripId } = req.params

    Trip.findByIdAndRemove(tripId)
        .then(() =>
            res.json({
                message: `Trip with ${tripId} is removed successfully.`,
            })
        )
        .catch((err) => res.json(err))
})

module.exports = router;