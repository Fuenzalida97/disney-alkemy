module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        password: {
            type: type.STRING
        },
    });
}