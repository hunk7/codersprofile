const mongoose = require('mongoose');
const {ObjectID} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
	title:{
		type:String,
		required:true,
		trim: true,
		index: true
	},
	body:{
		type:String,
		required:true,
		trim: true, 
		index: true
	},
	photo:{
		type:String,
		required:true,
		trim: true, 
		index: true
	},
	postedBy:{
		type:ObjectID,
		ref:"User"
	},
})

mongoose.model("Post",postSchema)