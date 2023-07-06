const user = require('../model/user');

module.exports = {
    async user(req, res){
        const u = await user.findByPk(1)
        res.render('../views/perfilUser.ejs', {user:u})
    },

    async insertFoto(req, res){
        console.log(req.body)
        res.render('../views/perfilUser.ejs')
    }
}