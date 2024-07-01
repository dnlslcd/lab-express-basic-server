// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const logger = require('morgan');

// Variables para el JSON
// const fs = require('fs');
// const path = require('path');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static('public')); // to serve static files from the `public` folder
app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(logger('dev')); // 'morgan' logger to log all incoming requests



// ROUTES
// Start defining your routes here:
// Home Route:
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

// Blog Route:
app.get('/blog', (req, res)=>{
    res.sendFile(__dirname + '/views/blog.html');
});

// JSON Projects
app.get('/api/projects', (req, res)=>{
    const projects = require('./data/projects.json');
    // const projects = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/projects.json')));
    res.json(projects);
})

// JSON Articles
app.get('/api/articles', (req, res)=>{
    const articles = require('./data/articles.json');
    // const articles = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/articles.json')));
    res.json(articles);
})

// 404 Route
 app.use((req, res)=>{
    res.status(404).sendFile(__dirname + '/views/not-found.html');
 });

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, ()=>{
    console.log("Servidor corriendo en el puerto 5005.");
});