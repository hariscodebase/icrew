const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
    crewName: String,
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Crew', crewSchema); 