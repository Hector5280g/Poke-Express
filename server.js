require('dotenv').config()
const express = require("express");
const app = express();
const pokemon  = require("./models/pokemon");
const mongoose = require("mongoose");
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())


// Setup inputs for our connect function
// Establish Connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("connected to MongoDB");
})



// Index route
app.get('/', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    })
});

  // New route
  app.get("/New", (req, res) => {
    res.render("New",);
  });

//Show route
app.get( '/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
});

// App listening
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));