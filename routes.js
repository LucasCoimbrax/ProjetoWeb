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

route.post('/', loginUser.confererUser);

route.post('/loginAdmin', loginAdmin.confererAdmin)
route.post('/perfilAdmin', perfilAdmin.adminSearch)

route.post('/cadasterUser', multer(config).single('foto'), cadasterUser.cadasterUser);
route.post('/cadasterVacine', cadasterVacine.cadasterVacine);


route.post('/perfilUser',multer(config).single('foto'), perfilUser.insertFoto);


route.post('/deleteUser', perfilAdmin.deleteUser);

route.get('/perfilAdminLogout', perfilAdmin.logout);
route.get('/perfilUserLogout', perfilUser.logout);

module.exports = route;