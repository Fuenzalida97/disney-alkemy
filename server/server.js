require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Database

const db = require('./config/database')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Route movie
app.use(require('./routes/movies'));


db.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});