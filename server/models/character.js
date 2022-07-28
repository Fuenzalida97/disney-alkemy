module.exports = (sequelize, type) => {
    return sequelize.define('characters', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: type.STRING,
            required: true,
            notNull: true
        },
        image: {
            type: type.STRING
        },
        age: {
            type: type.INTEGER,
            notNull: true
        },
        weight: {
            type: type.DOUBLE,
            notNull: true
        },
        history: {
            type: type.STRING
        }
    });
}