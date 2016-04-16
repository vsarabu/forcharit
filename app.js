var express=require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var db=require('./db')

var app= express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/',express.static('public'));


app.post('/sendData', function (req, res) {
	
	var body = req.body;
	console.log(body);
	//Sending body object to Database
	db(body);
    res.json(body);

})

app.listen(3000,function(){
console.log("Running on port 3000".rainbow);
})