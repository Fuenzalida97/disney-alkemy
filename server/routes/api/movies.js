const router = require('express').Router();

const { Movie, Genre, Character } = require('../../config/database');

router.get('/', async(req, res) => {

    //obtener usuario que hace la petición
    //console.log(req.usuarioId);
    //--------------------------------------

    const movies = await Movie.findAll({
        include: [{
                model: Character,
                as: "Characters",
                attributes: ['name', 'image']
            },
            {
                model: Genre,
                as: "Genres",
                attributes: ['name']
            }
        ]

        ,

        attributes: ['title', 'image'],
    });
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