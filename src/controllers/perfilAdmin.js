const user = require('../model/user');

module.exports = {
    async admin(req, res){
        res.render('../views/perfilAdmin.ejs')
    }
}