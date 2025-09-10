const express = require('express')// import express framework
const app = express()// create express app
const fetch = require('node-fetch');// import node-fetch framework
const cors = require('cors');
const helmet = require("helmet");// use helmet to safeguard app

const path = require('path');

// middleware and security
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet.frameguard());

app.use(express.static(path.join(__dirname, 'client/build')));

// itunes api call
app.get('/search/:name/:type', (req, res) => {
    fetch(`https://itunes.apple.com/search?term=${req.params.name}&entity=${req.params.type}`)
    .then(res => res.json())
    .then(data => res.send(data));
});

app.use(function(err, req, res) {
    console.log(err.stack);
    res.status(500).send("something broke!");
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname,
    'client', 'build','index.html'));
    });
}

// Establishing port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;