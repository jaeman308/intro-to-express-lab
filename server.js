const express = require('express');

const app = express();

const collectibles = [
    { name: 'shinyball', price: 5.95},
    { name: 'autographed picture of a dog', price: 10},
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99}
]

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


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
app.get('/collectibles/:id', (req, res) => {
   let id = parseInt(req.params.id, 10);

   if (id >= 0 && id < collectibles.length){
       let foundCollectible = collectibles[id];
       res.send(` You chose the ${foundCollectible.name}? For ${foundCollectible.price.toFixed(2)}!`)
   }else {
    res.send('Sorry this item in not in stock. Check back soon!')
   }
})

//4. 
// Query Parameters:

// min-price: Excludes shoes below this price.
// max-price: Excludes shoes above this price.
// type: Shows only shoes of the specified type.
// No parameters: Responds with the full list of shoes.

app.get('/shoes', (req,res) => {
    const minPrice = parseFloat(req.query['min-price']);
    const maxPrice = parseFloat(req.query['max-price']);
    const type = req.query['type'];

    let filterShoes = shoes; 

    if (!isNaN(minPrice)) {
        filterShoes = filterShoes.filter(shoe => shoe.price >= minPrice);
        res.send(``)
    } if (!isNaN(maxPrice)) {
        filterShoes = filterShoes.filter(shoe => shoe.price >= maxPrice);

    }if (type) {
        filterShoes = filterShoes.filter(shoe => shoe.type === type);
    }
    
    const filterDetials = filterShoes.map( shoe => `${shoe.name}: ${shoe.price}`).join(', ')

    res.send(` Here are your shoes: ${filterDetials}`);

    }); 



app.listen(3000, () => {
    console.log('Listening on port 3000 🥊');
})