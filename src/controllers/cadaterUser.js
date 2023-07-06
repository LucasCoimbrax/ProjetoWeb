const user = require('../model/user');
const vacine = require('../model/vacine');


module.exports = {
    async user(req, res){
        res.render('../views/cadasterUser')
    },
    async cadasterUser(req, res){
        const dados = req.body;

        let foto = 'user.png';

        if (req.file) {
            foto = req.file.filename;
        }

        await user.create({
            Nome: dados.name,
            Email: dados.email,
            Telefone: dados.phone,
            EDV: dados.edv,
            DataNascimento: dados.age,
            Foto: foto
        })
        res.redirect('/')
    }
}