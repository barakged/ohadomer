

const path = require('path');


// create an express app
const express = require("express")
const app = express()

app.use(function(req, res, next) {
    if(req.headers["x-forwarded-proto"] === "https"){
        // OK, continue
        return next();
      };
      res.redirect('https://'+req.hostname+req.url);
})

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));