const { Schema, model } = require("mongoose");


const groupTripSchema = new Schema({
     
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


const GroupTrip = model("GroupTrip", groupTripSchema);

module.exports = GroupTrip;