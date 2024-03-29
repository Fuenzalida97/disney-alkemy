module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        username: {
            type: type.STRING,
            required: true,
            notNull: true
        },
        email: {
            type: type.STRING,
            required: true,
            notNull: true
        },
        password: {
            type: type.STRING,
            required: true,
            notNull: true
        },
    });
}