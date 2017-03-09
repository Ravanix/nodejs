//use express framework
var express = require('express');

//async console log 
var winston = require('winston');

//configurable middelware
var confmiddleware = require('./configurable-middleware');

//Require for MongoDB
var mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/JetSpree');

// Declare User
var User = require('./models/user');

// Create User
var Jas = new User({
	uid: 99,
	name: 'JasNode'
});

Jas.save(function(error) {
	if (error) throw error;
	winston.log('info', 'User saved successfully');
})

// Init Express
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
	winston.log('info', 'gogo');
});	

//port for browser
app.listen(3000, function () {
	winston.log('info', 'listening port');
})