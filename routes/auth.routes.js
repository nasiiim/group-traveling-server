const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
 
const router = express.Router();
const saltRounds = 10;


router.post('signup', (req, res, next)=>{
    const { email, password, name } = req.body



    if(email === '' || password === '' || name === '') {
        res.status(400).json({ message: "Please enter e-mail, password and name" })
        return;
    }
})
