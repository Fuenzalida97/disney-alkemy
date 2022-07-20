const router = require('express').Router();

const { Movie } = require('../../config/database');

router.get('/', async(req, res) => {

    //obtener usuario que hace la petición
    console.log(req.usuarioId);

    const movies = await Movie.findAll();
    res.json(movies);
});

router.post('/', async(req, res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
});

router.put('/:id', async(req, res) => {
    await Movie.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha modificado' });

});

router.delete('/:id', async(req, res) => {
    await Movie.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha eliminado la película/Serie.' });
})



module.exports = router;




// const express = require('express');
// const app = express();
// const db = require('../../config/database');
// const Movie = require('../../models/movie');


// app.get('/movie', (req, res) => {
//     Movie.findAll({ attributes: ['titulo'] })
//         .then(movie => {
//             res.json(movie)
//             res.sendStatus(200);
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });


// app.post('/movie', (req, res) => {

//     let body = req.body;

//     if (body.nombre === undefined) {

//         res.status(400).json({
//             ok: false,
//             mensaje: 'el nombre es necesario'
//         });

//     } else {
//         res.json({
//             persona: body
//         });
//     }
// });

// app.put('/movie/:id', (req, res) => {

//     let id = req.params.id;

//     res.json({
//         id
//     })
// });

// app.delete('/movie', (req, res) => {
//     res.json('delete Usuario')
// });

// module.exports = app;