module.exports = (sequelize, type) => {
    return sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: {
            type: type.STRING,
            required: true,
            notNull: true
        },
        image: {
            type: type.STRING
        },
        calification: {
            type: type.DOUBLE,
        }
    });
}