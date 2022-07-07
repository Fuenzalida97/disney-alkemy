const express = require('express');
const app = express();
const Usuario = require('../models/usuario');


app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});


app.post('/usuario', (req, res) => {

    let body = req.body;

    Usuario.create({
            nombre: body.nombre,
            email: body.email,
            password: body.password

        }).then(function(usuarios) {
            if (usuarios) {
                res.json(usuarios);
            } else {
                res.status(400).send('Error el realizar registro.');
            }
        })
        .catch((err) => {
            console.log('Sync Error');
        });

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    })
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario')
});

module.exports = app;