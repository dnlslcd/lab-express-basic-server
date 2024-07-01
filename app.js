// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const logger = require('morgan');


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static('public')); // to serve static files from the `public` folder
app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(morgan('dev')); // 'morgan' logger to log all incoming requests



// ROUTES
// Start defining your routes here:
app.get('/', (req, res)=>{
    res.send(__dirname + '/views/home.html');
});


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>{
    console.log("Servidor corriendo en el puerto 5005.");
});