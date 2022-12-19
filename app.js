

const path = require('path');


// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'))
})
//http to https redirects
app.enable('trust proxy');
app.use((req,res,next)=>{
    console.log('hereeee')
    if(rec.secure){
        next();
    }else {
        console.log('hereeee222')
        res.redirect('https://www.ohadoner.co.il'+req.url);
    }
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));