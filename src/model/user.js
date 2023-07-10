// Importação
const Sequelize = require('sequelize');
const database = require('../config/bd');

const vacine = require('./vacine')
 
// Criando a tabela Sala
const user = database.define('User', {

    EDV: {
        type: Sequelize.INTEGER,
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


    Foto: {
        type: Sequelize.STRING(50),
    },
    
    Idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    DateBirth: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
});

user.belongsTo(vacine, {
    foreignKey: 'IDVacina'
});

// Exportando essa tabela
module.exports = user;