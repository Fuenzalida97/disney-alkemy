require('./config/config');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

const bodyParser = require('body-parser');

// Database

require('./config/database')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Route
app.use('/api', apiRouter);


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});