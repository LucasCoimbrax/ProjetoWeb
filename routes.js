const express = require('express');
const route = express.Router();

const loginAdmin = require('./src/controllers/loginAdmin');
const loginUser = require('./src/controllers/loginUser');
const cadasterVacine = require('./src/controllers/cadasterVacine');
const cadasterUser = require('./src/controllers/cadaterUser');

route.get('/', loginUser.loginUser);
route.get('/loginAdmin', loginAdmin.loginAdmin);

route.get('/cadasterVacine', cadasterVacine.vacine);
route.post('/cadasterVacine', cadasterVacine.vacineCadaster);

route.get('/cadasterUser', cadasterUser.user);
route.post('/cadasterUser', cadasterUser.cadasterUser);

module.exports = route;