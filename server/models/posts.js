var mongoose = require('mongoose');

var PostSchema= new mongoose.Schema({
	content:{
	type: String,
	required: true,
	unique: true
	},
	_user:{
		type: String
	}

})

mongoose.model("Posts", PostSchema);