const Sequelize = require('sequelize');

const UserModel = require('../models/users');
const MovieModel = require('../models/movie');
const CharacterModel = require('../models/character');
const GenreModel = require('../models/genre');

const sequelize = new Sequelize('disney_plus', 'disney', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la DB')
    })
    .catch(err => {
        console.log('No se conecto a la DB')
    });


const Movie = MovieModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Genre,
    Movie,
    Character,
    User
}