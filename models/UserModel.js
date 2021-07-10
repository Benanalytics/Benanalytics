const mongoose = require('mongoose');
const role = require('../config/role')
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
	user_role: {
		type: String,
		default: role.USER_ROLE
	},
	photo: {
		type: String,
		default: ''
	},
	phone: {
		type: String,
		default: ''
	},
	access: {
		type: Boolean,
		default: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = userModel = mongoose.model('userModel', userSchema);