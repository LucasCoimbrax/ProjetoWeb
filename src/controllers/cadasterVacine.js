const vacine = require('../model/cadasterVacine');

module.exports = {
    async vacine(req, res){
        res.render('../views/cadasterVacine')
    },

    async vacineCadaster(req, res){
        const dados = req.body;

        await vacine.create({
            Nome: dados.name,
            Fabricante: dados.fabricante,
            Infos: dados.infos,
            Doses: dados.doses,
            PeriodoAtivo: dados.periodoAtivo
        })
    }
}