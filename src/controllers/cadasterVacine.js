const vacine = require('../model/vacine');

module.exports = {
    async vacine(req, res){
        res.render('../views/cadasterVacine',{edvGet: req.query.edv})
    },

    async vacineCadaster(req, res){
        const dados = req.body;

        await vacine.create({
            Nome: dados.name,
            Fabricante: dados.fabricante,
            Infos: dados.infos,
            Doses: dados.doses,
            PeriodoAtivo: dados.periodoAtivo,
            EDV: req.query.edv
        })
        res.redirect(`/perfilAdmin?edv=${req.query.edv}`)
    }
}

