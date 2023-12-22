const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const nodemailer = require("nodemailer");


// Load user modal
const Game = require("../models/Game");
const Result = require("../models/Result");

// @route   POST api/users/register
// @desc    Register route
// @access  Public
router.get("/all_game", async (req, res) => {
    try {
        const response = await Game.find();
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ msg: 'Employee data with this name was not found' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.post("/set_user_data", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try{
        const gameInfo = {};
        gameInfo.gametype = req.body.gametype;
        gameInfo.startdate = req.body.startdate;
        gameInfo.enddate = req.body.enddate;
        gameInfo.attendnumber = req.body.attendnumber;
        gameInfo.content = req.body.content.map(item => {
            return {
                question: item[0],
                answer1: item[1],
                answer2: item[2],
                answer3: item[3],
                answer4: item[4],
                answer5: item[5],
                answer6: item[6],
            };
        });
        gameInfo.correctAnswer = req.body.correctAnswer;
        new Game(gameInfo).save().then(game => res.json(game));
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})

module.exports = router;
