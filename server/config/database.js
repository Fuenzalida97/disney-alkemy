const Sequelize = require('sequelize');

const UsuarioModel = require('../models/usuario');
const MovieModel = require('../models/movie');

const sequelize = new Sequelize('disney_plus', 'disney', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });

const Usuario = UsuarioModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Usuario,
    Movie
}