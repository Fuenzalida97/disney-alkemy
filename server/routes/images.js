const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const fs = require('fs');
const path = require('path');

const { Movie, Genre, Character } = require('../config/database');

app.use(fileUpload());

app.put('/:tipo/:id', async(req, res) => {

    let tipo = req.params.tipo;
    let id = req.params.id;

    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: { message: 'No se ha seleccionado ninguna imagen' }
            });
    }

    //Validar tipo
    let tiposValidos = ['genres', 'movies', 'characters'];
    if (tiposValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Los tipos permitidos son :' + tiposValidos.join(', ')
            }

        });
    }

    let image = req.files.image;
    let nombreSeparado = image.name.split('.');
    let extension = nombreSeparado[nombreSeparado.length - 1];

    //Exrenciones permitidas
    let extensionesValidas = ['png', 'jpeg', 'jpg', 'gif'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'Las extenciones permitidas son :' + extensionesValidas.join(', '),
                ext: extension
            }

        });
    }

    //Cambiar nombre al archivo
    let nombreImagen = `${id}-${new Date().getMilliseconds()}.${extension}`;

    image.mv(`uploads/${tipo}/${nombreImagen}`, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (tipo === 'movies') {
            imageMovie(id, res, nombreImagen);
        } else if (tipo === 'characters') {
            imageCharacter(id, res, nombreImagen);
        } else {
            imageGenre(id, res, nombreImagen);
        }

    });

});

async function imageMovie(id, res, nombreImagen) {

    const movieDB = await Movie.findByPk(id);

    if (!movieDB) {
        deleteImage(nombreImagen, 'movies');

        return res.status(400).json({
            ok: false,
            err: { message: 'Id no existe' }
        });
    }

    deleteImage(movieDB.image, 'movies');

    movieDB.image = nombreImagen;

    await movieDB.save();
    res.json({
        movieDB
    });

}

async function imageCharacter(id, res, nombreImagen) {

    const characterDB = await Character.findByPk(id);

    if (!characterDB) {
        deleteImage(nombreImagen, 'characters');

        return res.status(400).json({
            ok: false,
            err: { message: 'Id no existe' }
        });
    }

    deleteImage(characterDB.image, 'characters');

    characterDB.image = nombreImagen;

    await characterDB.save();
    res.json({
        characterDB
    });
}

async function imageGenre(id, res, nombreImagen) {
    const genreDB = await Genre.findByPk(id);

    if (!genreDB) {
        deleteImage(nombreImagen, 'genres');

        return res.status(400).json({
            ok: false,
            err: { message: 'Id no existe' }
        });
    }

    deleteImage(genreDB.image, 'genres');

    genreDB.image = nombreImagen;

    await genreDB.save();
    res.json({
        genreDB
    });
}

function deleteImage(nameImage, tipo) {
    let pathImage = path.resolve(__dirname, `../../uploads/${tipo}/${nameImage}`);

    if (fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
    }

}

module.exports = app;