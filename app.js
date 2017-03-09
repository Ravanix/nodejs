//use express framework
var express = require('express');

//async console log 
var winston = require('winston');

//Require for MongoDB
var mongoose = require('./connectiondb');

//Middleware Error
//var checkerror = require('./middleware/error');

//Router
var userRouter = require('./routes/user');

// Init Express
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
	winston.log('info', 'gogo');
});

app.use('/', userRouter);	

//catch 404
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


//port for browser
app.listen(3000, function () {
	winston.log('info', 'listening port');
})