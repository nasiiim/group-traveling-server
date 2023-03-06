// const { Schema, model } = require("mongoose");

const mongoose = require('mongoose')
const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  }
);

// const User = model("User", userSchema);

// module.exports = User;

module.exports = mongoose.model("User", userSchema)
