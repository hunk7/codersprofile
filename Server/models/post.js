const mongoose = require('mongoose');
const {ObjectID} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	body:{
		type:String,
		required:true
	},
	photo:{
		type:String,
		default:"np photo"
	},
	postedBy:{
		type:ObjectID,
		ref:"User"
	},
})

mongoose.model("Post",postSchema)