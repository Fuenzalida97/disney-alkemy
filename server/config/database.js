const Sequelize = require('sequelize');

const UserModel = require('../models/users');
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


const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Movie,
    User
}