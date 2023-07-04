const user = require('../model/user');

module.exports = {
    async user(req, res){
        res.render('../views/perfilUser.ejs')
    }
}