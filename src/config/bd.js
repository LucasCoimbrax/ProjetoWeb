
const sequelize = require('sequelize');
 
//configurações da base de dados
const database = new sequelize('projetoweb', 'ProjetoWeb Vacinas', 'Pr0j3t0W3bV4c1n45',
{
    dialect: 'mssql', host:'localhost', port: 63333
    //wesley : 65054
});
 
database.sync();
 
module.exports = database;