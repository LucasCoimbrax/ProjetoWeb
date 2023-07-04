// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

const vacine = require('./vacine')
 
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

    Telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },

    EDV: {
        type: Sequelize.STRING(12),
        allowNull: false
    },
    Idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

user.belongsTo(vacine, {
    foreignKey: 'IDVacina'
});

// Exportando essa tabela
module.exports = user;