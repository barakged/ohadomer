

const path = require('path');


// create an express app
const express = require("express")
const app = express()
app.enable('trust proxy')

// use the express-static middleware
app.use(express.static("public"))
app.use(function(request, response, next) {
    if (process.env.NODE_ENV != 'development' && !request.secure) {
       return response.redirect("https://" + request.headers.host + request.url);
    }
    next();
})
// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));