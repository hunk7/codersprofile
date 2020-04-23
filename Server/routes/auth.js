const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');
const requirelogin = require('../middleware/requirelogin')

router.get('/',(req,res) => {
	res.send("Hello !");
})

router.get('/protected',requirelogin,(req,res) => {
	res.send("Hello User!");
})

router.post('/signup',(req,res) => {   // API or route '/signup'
	const {name,email,password} = req.body
	if (!email || !password || !name) {
		return res.status(422).json({error: "Please provide the required feilds"})
	}
	// res.json({message:"Successfullt send!"})
	User.findOne({email:email}).then((savedUser) => {
		if (savedUser) {
			return res.status(422).json({error: "User already Exists with given Email"})
		}

		bcrypt.hash(password, 12)
		.then(hashedpassword => {
			const user = new User({  // pushing Data into Mongodb through URI
			email,
			password:hashedpassword,
			name
			})

			user.save().then(user => {
				res.json({message: "Saved Successfully"})
			})
			.catch(err => {
				console.log(err);
			})
		})
	}).catch(err => {
		console.log(err);
	})
});

router.post('/signin',(req,res) => {   // API or route '/signin'
	const {email,password} = req.body
	if (!email || !password) {
		return res.status(422).json({error:"provide Email & password"})
	}
	User.findOne({email:email}).then(savedUser => {
		if (!savedUser) {
			return res.status(422).json({error:"Invalid Email or password "})
		}
		bcrypt.compare(password, savedUser.password).then(doMatch => {
			if (doMatch) {
				// res.json({message:"Successfully Signed In"})

				const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
				res.json({token})

			} else {
				return res.status(422).json({error: "Invalid Email or password "})
			}
		}).catch(err => {
			console.log(err);
		})
	})
})

module.exports = router;