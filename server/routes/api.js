const router = require('express').Router();

const apiMoviesRouter = require('./api/movies')

router.use('/movie', apiMoviesRouter);

module.exports = router;