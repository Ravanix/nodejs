// All Require
var express = require('express');
var winston = require('winston');

var router = express.Router();

// User Model
var User = require('../models/user');

// User
router.route('/user')

	.get(function(req, res) {
		User.find({ 
			name: 'JasNode'
		}, function(error, data) {
			if (error) {
				throw error
			} else {
				winston.log('info', 'Get List of user!');
				res.format({
					html: function () {
						// do ur html stuff here
						res.json(data);
					},
					json: function () {
						// all ur json data here
						winston.log('info', data);
						res.json(data);
					}
				})
			}
		});
	})

	.post(function(req, res) {
		// GET DATA FROM form
		User.create({
			uid: 88,
			name: 'TheHorde'
		},function(error, data) {
			if (error) { 
				throw error;
			} else {
				winston.log('info', 'User saved successfully');
				res.format({
					html: function () {
						// do ur html stuff here 
						//res.redirect(''); redirect to success page
					},
					json: function () {
						// all ur json data here
						winston.log('info', res.json(data));
						res.json(data);
					}
				})
			}
		})
	});

module.exports = router;
