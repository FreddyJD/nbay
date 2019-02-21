import express from 'express';

const app = express();


module.exports = [
    // Home page route 
app.get('/', (req, res) => 
    res.json({"hero" : false }
    )),

    // Dashboard
app.get('/dashboard', (req, res) => 
    res.json({"hero" : true }
    )),

    // Register route to POST 
app.post('/register', (req, res) => 
    res.json({"hero" : true }
    )),

    // Login route to POST 
app.post('/item/:id', (req, res) => 
    res.json({"hero" : req.params.id }
    )),

]
