const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ResultSchema = new Schema({
    game: {
        type: Schema.Types.ObjectId,
        ref: "games"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    values: {
        type: [String],
        required: true
    },
    state: {
        type: Number,
        required: true
    }

});

module.exports = Result = mongoose.model('results', ResultSchema);