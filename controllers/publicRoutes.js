import express from 'express';

const app = express();


module.exports = [
    // Home page route 
app.get('/', (req, res) => 
    res.json({"hero" : false }
    )),

    // login route 
app.get('/login', (req, res) => 
    res.json({"hero" : true }
    )),

    // Register route 
app.get('/register', (req, res) => 
    res.json({"hero" : true }
    )),

    // Item route 
app.get('/item/:id', (req, res) => 
    res.json({"hero" : req.params.id }
    )),

    // List of items routes 
app.get('/items', (req, res) => 
    res.json({"hero" : req.params.id }
    ))

]
