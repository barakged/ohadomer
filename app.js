

// const path = require('path');


// // create an express app
// const express = require("express")
// const app = express()

// // use the express-static middleware
// app.use(express.static("public"))

// // define the first route
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname+'/app/index.html'))
// })

// // start the server listening for requests
// app.listen(process.env.PORT || 3000, 
// 	() => console.log("Server is running..."));


var express = require('express');
var enforce = require('express-sslify');

var app = express();

// put it as one of the first middlewares, before routes
app.use(enforce.HTTPS()); 

// handling your static files just like always
app.use(express.static(__dirname + '/public'));

// handling requests to root just like always
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
});

app.listen(3000);