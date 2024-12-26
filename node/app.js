
// Include the express module and assign it to a constant named 'express'.
const express = require('express');

// The express() function is a top-level function exported by the express module. 
const app = express();
const port = 3000;
const path = require('path'); 

// Instantiate the 'ejs' templating engine.
app.set('view engine', 'ejs');

// Define the location of views.
app.set('views', path.join(__dirname, '/views'));

// Define the location of the public directory for css, js, and imgs.
app.use(express.static('../public'));




// *** GET routes ***
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})


// Specify which port we want the server to listen for requests.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}: http://localhost:${port}/`)
})