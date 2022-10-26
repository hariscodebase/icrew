const mongoose = require('mongoose');

mongoose.set('debug', true); //logs all details of mongoose executions
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/vote');
mongoose.connect(process.env.DATABASE);



module.exports.User = require('./user');
module.exports.Poll = require('./poll');
module.exports.Crew = require('./crew');
module.exports.Event = require('./event');