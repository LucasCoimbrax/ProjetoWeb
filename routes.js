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
route.get('/perfilUser', perfilUser.user);
route.get('/cadasterVacine', cadasterVacine.vacine);
route.get('/cadasterUser', cadasterUser.user);


route.get('/perfilAdmin', perfilAdmin.admin);

route.get('/', loginUser.confererUser);

route.post('/cadasterVacine', cadasterVacine.vacineCadaster);

route.post('/cadasterUser', multer(config).single('foto'), cadasterUser.cadasterUser);

module.exports = route;