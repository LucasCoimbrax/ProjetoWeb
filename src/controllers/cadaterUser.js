const user = require('../model/user');
const vacine = require('../model/vacine');


module.exports = {
    async user(req, res){
        res.render('../views/cadasterUser')
    },
    async cadasterUser(req, res){
        const dados = req.body;

        await user.create({
            Nome: dados.name,
            Email: dados.email,
            Telefone: dados.phone,
            EDV: dados.edv,
            Idade: dados.age
        })
        res.redirect('/')
    }
}