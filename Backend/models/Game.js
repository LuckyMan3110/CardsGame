const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
  gametype: {
    type: String,
    required: true,
  },
  startdate: {
    type: Date,
    default: Date.now(),
  },
  enddate: {
    type: Date,
    default: Date.now()
  },
  attendnumber: {
    type: Number
  },
  state: {
    type: Number,
    default: -1
  },
  content: [
    {
        question: {
            type: String,
            required: true
        },
        answer1: {
            type: String,
            required: true,
        },
        answer2: {
            type: String,
            required: true,
        },
        answer3: {
            type: String,
            required: true,
        },
        answer4: {
            type: String,
            required: true,
        },
        answer5: {
            type: String,
            required: true,
        },
        answer6: {
            type: String,
            required: true,
        },
    }
  ],
  correctAnswer : {
    type: [String],
    required: true
  },
  weight: {
    type: [Number],
  },
  followlist: [{
    email: {
        type: String,
    },
    values: {
        type: [String]
    }
  }],
});


// Define a method to perform the action when the startdate or enddate occurs
GameSchema.methods.performActionAtDate = function (date, value) {
    this.state = value;
    this.save().then(() => {
      console.log(`State value set to ${value}.`);
    });
  };
  
const scheduleDateCheck = (game, date, value) => {
    const currentTime = new Date();
    const tempdate = new Date(date.getTime() + 2 * 60 * 1000);
    const timeUntilDate = new Date(date.getTime() + 2 * 60 * 1000) - currentTime;
  
    if (timeUntilDate <= 0) {
      game.performActionAtDate(date, value);
    } else {
      setTimeout(() => scheduleDateCheck(game, date, value), timeUntilDate);
    }
};
  
GameSchema.pre('save', function (next) {
    scheduleDateCheck(this, this.startdate, 1);
    if (this.enddate) {
      scheduleDateCheck(this, this.enddate, 0);
    }
    next();
});

module.exports = Game = mongoose.model('games', GameSchema);