const express = require('express');
const route = express.Router();
const multer = require("multer");

const config = require('./src/config/multer');

const loginAdmin = require('./src/controllers/loginAdmin');
const loginUser = require('./src/controllers/loginUser');

const perfilAdmin = require('./src/controllers/perfilAdmin');
const perfilUser = require('./src/controllers/perfilUser');

const cadasterVacine = require('./src/controllers/cadasterVacine');
const cadasterUser = require('./src/controllers/cadaterUser');

route.get('/', loginUser.loginUser);
route.get('/loginAdmin', loginAdmin.loginAdmin);

route.get('/perfilAdmin', perfilAdmin.admin);

route.get('/perfilUser', perfilUser.user);

route.get('/cadasterVacine', cadasterVacine.vacine);
route.post('/cadasterVacine', cadasterVacine.vacineCadaster);

route.get('/cadasterUser', cadasterUser.user);
route.post('/cadasterUser', multer(config).single('foto'), cadasterUser.cadasterUser);

module.exports = route;