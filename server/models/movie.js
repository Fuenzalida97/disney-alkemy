module.exports = (sequelize, type) => {
    return sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: type.STRING,
            required: true,
        },
        imagen: {
            type: type.STRING
        },
        calificacion: {
            type: type.STRING
        },
        personajes: {
            type: type.STRING
        },
    });
}