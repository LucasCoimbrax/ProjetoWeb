const user = require('../model/user');

module.exports = {
    async user(req, res){
        const u = await user.findByPk(1)
        res.render('../views/perfilUser.ejs', {user:u})
    },

    async insertFoto(req, res){
        console.log(req.body)
        const u = await user.findByPk(1)
        await user.update({
            Foto: req.file.filename
        },
        {where: {IDUser: 1}})
        res.redirect('/perfilUser')
    }
}