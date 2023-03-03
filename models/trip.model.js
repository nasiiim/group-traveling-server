const { Schema, model } = require("mongoose");


const tripSchema = new Schema({
     
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    startDate: { 
        type: Data, 
        required: true },
    endDate: { 
        type: Data,
         required: true },
    // startPoint: {
    //     type: String,
    //     ref: 'Location'
    // },
    destination: {
        type: String,
        ref: 'Location'
    },
    subscriber: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    // accomodition: {
    //     type: String,
    //     ref: 'Accomodation'
    // },


})


const Trip = model("Trip", tripSchema);

module.exports = Trip;