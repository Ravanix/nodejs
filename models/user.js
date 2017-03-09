var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userschema = new schema({
	uid: Number,
	name: String,
	created_at: Date,
	updated_at: Date
});

userschema.pre('save', function (next) {
	this.updated_at = new Date();

	if (!this.created_at)
		this.created_at = new Date();

	next();
});

var User = mongoose.model('User', userschema);

module.exports = User;