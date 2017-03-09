//Require library
var mongoose = require('mongoose');
var winston = require('winston');

//Use Bluebird promise for mongoose because the mongoose promise is already deprecated
mongoose.Promise = require("bluebird");

//Connect to MongoDB and check for error connection
mongoose.connect('mongodb://localhost:27017/JetSpree').then(
	() => {
		winston.log('info', 'Connection is up!');
	},
	err => {
		winston.log('info', err);
	}
);

module.exports = mongoose;