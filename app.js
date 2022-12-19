

const path = require('path');


// create an express app
const express = require("express")
const app = express()
app.enable('trust proxy')

// use the express-static middleware
app.use(express.static("public"))
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})
// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));