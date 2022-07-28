const express = require('express');

const fs = require('fs');
const path = require('path');
const { Movie, Genre, Character } = require('../../config/database');


let app = express();

app.get('/:tipo/:id', async(req, res) => {

    let tipo = req.params.tipo;
    let id = req.params.id;

    var x = tipo;

    if (tipo === 'movies') {
        x = Movie
    } else if (tipo === 'characters') {
        x = Character
    } else {
        x = Genre
    }


    const tip = await x.findAll({
        where: {
            id: id
        },
        attributes: ['image']
    });

    let image = tip[0].image;



    let pathImage = path.resolve(__dirname, `../../../uploads/${tipo}/${image}`);

    console.log(pathImage);

    if (fs.existsSync(pathImage)) {
        res.sendFile(pathImage);
    } else {
        let noImagePath = path.resolve(__dirname, '../../assets/no-image.jpg');

        res.sendFile(noImagePath);
    }

});


module.exports = app;