const express = require('express');

const app = express();

const collectibles = [
    { name: 'shinyball', price: 5.95},
    { name: 'autographed picture of a dog', price: 10},
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99}
]


// syntax app. method('/route', (req,res) => {})

//1. 
app.get('/greetings/:username', (req,res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

//2. 

app.get('/roll/:number', (req,res) => {
    const param = req.params.number;
    const num = parseInt(param, 10) 

    if (isNaN(num)) {
    return res.send("You must specify a number.");

    }else {
        rollNumber = Math.floor(Math.random() * req.params.number);
    };
   res.send(`You rolled a ${rollNumber}`); 
});

//3.





app.listen(3000, () => {
    console.log('Listening on port 3000 🥊');
})