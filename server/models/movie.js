const Sequelize = require('sequelize');
const db = require('../config/database');

const Movie = db.define('movies', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    titulo: { type: Sequelize.STRING },
    imagen: { type: Sequelize.STRING },
    fechaCreacion: { type: Sequelize.STRING },
    calificacion: { type: Sequelize.STRING },
    personajes: { type: Sequelize.STRING },
})

module.exports = Movie;