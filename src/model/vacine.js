// Importação
const Sequelize = require('sequelize');
const database = require('../config/bd');
 
// Criando a tabela Sala
const vacine = database.define('Vacine', {
    IDVacina: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
 
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Fabricante: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    //A vacina X serve para Y.
    Infos: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    Doses: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    //Essa vacina fica ativa por X anos.
    PeriodoAtivo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});
 
// Exportando essa tabela
module.exports = vacine;