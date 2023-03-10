const { Schema, model } = require("mongoose");


const tripSchema = new Schema({
     
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    startDate: { 
        type: Date, 
        required: true },
    endDate: { 
        type: Date,
         required: true },
    
    destination: {
        type: String,
        required: true
    },
    subscriber: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    // accomodition: {
    //     type: String,
    //     ref: 'Accomodation'
    // },

    // startPoint: {
    //     type: String,
    //     ref: 'Location'
    // },


})


const Trip = model("Trip", tripSchema);

module.exports = Trip;