const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number,
        default: 0 
    }
})

const eventSchema = new mongoose.Schema({
    crew: [{type: mongoose.Schema.Types.ObjectId, ref: 'Crew'}],
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    title: String,
    description: String,
    venue: String,
    dateTime: Date,
    options: [optionSchema],
    voted: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', eventSchema);