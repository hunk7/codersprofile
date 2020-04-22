const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');
require('./models/user');
// mongoose.model("User");

app.use(express.json());
app.use(require('./routes/auth'));

const Middleware = (req,res,next) => {
	console.log('Middleware Running');
	next();
}

mongoose.connect(MONGOURI,{
	useNewUrlParser: true,
	useUnifiedTopology: true 
});

mongoose.connection.on('connected',() => {
	console.log('MongoDB is connected');
});

mongoose.connection.on('error',(err) => {
	console.log('Error connecting',err);
});

// app.use(Middleware);

app.get('/',(req,res) => {
	console.log('Invoked');
	res.send("Hello World");
});

app.get('/about',Middleware,(req,res) => {
	console.log('Invoked About');
	res.send("About Page !");
});

app.listen(PORT,() => {
	console.log('Server is Running on Port',PORT);
})