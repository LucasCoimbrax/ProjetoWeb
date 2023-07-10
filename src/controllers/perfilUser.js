const user = require('../model/user');

module.exports = {
    async user(req, res){
        const u = await user.findByPk(req.query.EDV)

        if(!user){
            return
        }

        res.render('../views/perfilUser.ejs', {user:u})
    },

    async insertFoto(req, res){
        console.log(req.body)
        const u = await user.findByPk(req.query.EDV)
        await user.update({
            Foto: req.file.filename
        },
        {where: {EDV: req.query.EDV}})
        res.redirect(`/perfilUser?EDV=${req.query.EDV}`)
    }
}