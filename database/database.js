const Sequelize = require('sequelize');

const connection = new Sequelize('guiaPerguntas', 'root', 'Magextreme30%', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;