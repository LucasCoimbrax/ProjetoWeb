// Iniciando Route do Express
const express = require('express');
const route = express.Router();

const cadastroUser = require('./src/Controllers/cadastroUser');
 
// Importando os Controllers
const home = require('./src/controllers/home');
const config = require('./src/config/multer');
 
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/cadastroEstudante', cadastro.aluno);
route.post('/cadastroEstudante', multer(config).single('foto'), cadastro.alunoInsert);

route.get('/cadastroSala', cadastro.sala);
route.post('/cadastroSala', cadastro.salaInsert);


module.exports = route;