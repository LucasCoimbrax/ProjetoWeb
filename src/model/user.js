// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
 
// Criando a tabela Sala
const user = database.define('User', {
    IDUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
 
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
 
    Email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

});
 
// Exportando essa tabela
module.exports = sala;