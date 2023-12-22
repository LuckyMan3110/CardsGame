const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const nodemailer = require("nodemailer");

// Load Input
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load user modal
const User = require("../models/User");

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "Users works!!" }));

// @route   POST api/users/register
// @desc    Register route
// @access  Public
router.post("/signup", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // Check Validation
  // if (!isValid) {
  //   console.log(errors);
  //   return res.status(400).json(errors);
  // }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({msg: "Email already exists"});
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        rating: "pg", // picture rating
        default: "mm" // Default
      });
      
      const newUser = new User({
        name: req.body.user_name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json({user, msg: "Sign In Successful"}))
            .catch(err => console.warn(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User/ Return JWT
// @access  Public
router.post("/signin", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payLoad = { id: user.id, name: user.name, email: user.email, avatar: user.avatar, access_type: user.access_type }; // Create JWT payload
        jwt.sign(
          payLoad,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              msg: "Login Successful"
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// router.get("/me", async (req, res) => {
//   if (!req.session.userId) {
//     return res.status(401).json({ msg: "Please Sign In to Your Account!" });
//   }
//   const user = await User.findOne({
//     attributes: ['id', 'email', 'username'],
//     where: {
//       user_id: req.session.userId
//     }
//   });
//   if (!user) return res.status(404).json({ msg: "User Not Found" });
//   res.status(200).json(user);
// });

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      name: req.user.name,
      email: req.user.email,
      access_type: req.user.access_type
    });
  }
);



module.exports = router;
