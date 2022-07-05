const Sequelize = require('sequelize');

module.exports = new Sequelize('disney_plus', 'disney', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});