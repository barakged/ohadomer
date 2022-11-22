const express = require('express');
const path = require('path');
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.use(express.static("app"))

app.use('/', function(req, res){
    res.sendFile(path.join(__dirname+'/app/index.html'))
})

app.listen(port, ()=> {
    console.log('asd')
})