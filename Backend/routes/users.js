const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const nodemailer = require("nodemailer");


// Load user modal
const User = require("../models/User");

// @route   POST api/users/register
// @desc    Register route
// @access  Public
router.get("/name/:name", async (req, res) => {
    try {
        const response = await User.findOne({
            name: req.params.name,
        });
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ msg: 'Employee data with this name was not found' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});



module.exports = router;
