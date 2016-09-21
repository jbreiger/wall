console.log('users model');
var mongoose = require('mongoose');

var UserSchema= new mongoose.Schema({
	username:{
	type: String,
	required: true,
	unique: true
	}

})

mongoose.model("Users", UserSchema);