const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const data = require('./public/questions.json');



// Initialize the app
const app = express();
const port = 3000;

// Set up bodyParser middleware to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));


// Set up Handlebars as the templating engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

// Serve static files (CSS, images) from the "public" directory
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {

    let selectedItems = getRandomItems(data, 10);
    // console.log(selectedItems);

    // Render the 'home' template and pass the json data
    //res.render('home', { data });
    res.render('home', { selectedItems });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




function getRandomItems(arr, count) {
    // Shuffle the array using the Fisher-Yates algorithm
    const shuffled = arr.slice(); // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    // Return the first `count` items from the shuffled array
    return shuffled.slice(0, count);
}