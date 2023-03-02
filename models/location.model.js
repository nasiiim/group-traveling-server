const { Schema, model } = require("mongoose");


const locationSchema = new Schema({

      country: { type: String, required: true },
      city : {type: String, required: true},
      location: {
        longitude: Number,
        latitude: Number
    }

})


const Location = model("Location", locationSchema);

module.exports = Location;