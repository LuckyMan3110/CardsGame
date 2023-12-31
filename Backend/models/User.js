const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  access_type : {
    type: String,
    default: "user"
  },
  isVerified: {
      type: Boolean,
      required: false
  },
  verificationCode: {
      type: String,
      required: false
  }
});

module.exports = User = mongoose.model('users', UserSchema);