const router = require('express').Router();

const { Character, Movie, Genre } = require('../../config/database');

router.get('/:name', async(req, res) => {

    var name = req.params.name;

    //obtener usuario que hace la petición
    console.log(req.usuarioId);

    const characters = await Character.findAll({
        include: {
            model: Movie,
            as: "Movies",
            attributes: ['title']
        },
        where: {
            name: name
        },
        attributes: ['name', 'age'],
        order: [
            ['age', 'DESC'],
        ]
    });
    res.json(characters);

});
router.get('/', async(req, res) => {
    const character = await Character.findAll({
        attributes: ['name', 'image'],
    });
    res.json(character);
});

router.post('/', async(req, res) => {
    const character = await Character.create(req.body);
    res.json(character);
});

router.put('/:id', async(req, res) => {
    await Character.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha modificado' });

});

router.delete('/:id', async(req, res) => {
    await Character.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Se ha eliminado la película/Serie.' });
})



module.exports = router;