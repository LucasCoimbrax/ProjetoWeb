const vacine = require("../model/vacine");

module.exports = {
    async vacine(req, res){
        res.render('../views/cadasterVacine',{edvGet: req.query.edv})
    },

  async cadasterVacine(req, res) {
    const dados = req.body;

    console.log(dados)

    try{

        if(!dados.name || !dados.fabricante || !dados.infos || !dados.doses || !periodoAtivo){
            throw new Error("401 - Bad Request, Forms Invalid!")
        }

        await vacine.create({
            Nome: dados.name,
            Fabricante: dados.fabricante,
            Infos: dados.infos,
            Doses: dados.doses,
            PeriodoAtivo: dados.periodoAtivo,
        });

        EDV: req.query.edv
        
        res.redirect(`/perfilAdmin?edv=${req.query.edv}`)
    }catch(e){
        console.log(e)
        res.redirect("/cadasterVacine");
    }
  }
};
