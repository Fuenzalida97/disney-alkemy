module.exports = (sequelize, type) => {
    return sequelize.define('genre', {
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
        }
    });
}