const { Schema, model } = require("mongoose");


const accomodSchema = new Schema(
  {
    type: {type: String, required: true},
    cost: {type:Number, required: true}
  
  }
);

const Accomodation = model("Accomodation", accomodSchema);

module.exports = Accomodation;