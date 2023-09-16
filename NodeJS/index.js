const express=require('express');
const bodyParser=require('body-parser');

//user module imports
const { mongoose } = require('./mongo.js'); //destructuring syntax from es6
var questionsController = require('./controllers/questionsController.js');


var app = express();
//replace bodyParser with express.json([options]) later
app.use(bodyParser.json());

app.listen(3000, ()=>console.log("Server started at port 3000..."));

app.use('/questions',questionsController)