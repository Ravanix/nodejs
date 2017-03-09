// All Require
var express = require('express');
var winston = require('winston');

var router = express.Router();

// User Model
var User = require('../models/user');

// Create User
router.get('/adduser', function(req, res) {
	var Jas = new User({
		uid: 99,
		name: 'JasNode'
	});

	Jas.save(function(error) {
		if (error) throw error;
		winston.log('info', 'User saved successfully');
	})
});

module.exports = router;
