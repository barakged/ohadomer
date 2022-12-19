

const path = require('path');

function forceHTTPS(req, res, next) {
    if (!req.secure) {


        var hostname = req.hostname;


        var destination = ['https://', hostname,':', app.get('httpsPort'), req.url].join('');

        return res.redirect(destination);
    }
    next();
}

// create an express app
const express = require("express")
const app = express()
app.use(forceHTTPS);

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));