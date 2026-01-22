require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); 
app.use(express.static('public')); 

// Bonus: Custom Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send("My Week 2 API!");
});

// POST /user -> Accepts {name, email}
app.post('/user', (req, res) => {
    const { name, email } = req.body;
    
    // Error handling for missing data
    if (!name || !email) {
        return res.status(400).send("Error: Name and Email are required.");
    }
    
    res.send(`Hello, ${name}!`);
});

// GET /user/:id -> Route Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} profile`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
