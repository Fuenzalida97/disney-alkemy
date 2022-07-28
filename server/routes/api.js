const router = require('express').Router();

const middlewares = require('./middlewares');
const apiMoviesRouter = require('./api/movies');
const apiCharactersRouter = require('./api/characters');
const apiUsersRouter = require('./api/users');
const apiShowImagesRouter = require('./api/show-images');
const apiImagesRouter = require('./images');



router.use('/movies', middlewares.checkToken, apiMoviesRouter);
router.use('/characters', middlewares.checkToken, apiCharactersRouter);
router.use('/show-images', middlewares.checkToken, apiShowImagesRouter);
router.use('/images', middlewares.checkToken, apiImagesRouter);
router.use('/auth', apiUsersRouter);


module.exports = router;