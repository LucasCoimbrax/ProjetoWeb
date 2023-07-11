const vacine = require("../model/vacine");
const user = require("../model/user");

module.exports = {
  async vacine(req, res) {
    res.render("../views/cadasterVacine", { edvGet: req.query.edv });
  },

  async cadasterVacine(req, res) {
    const dados = req.body;
    const edv = req.query.edv;

    try {
      if (
        !edv ||
        !dados.name ||
        !dados.fabricante ||
        !dados.infos ||
        !dados.doses ||
        !dados.periodoAtivo
      ) {
        throw new Error("401 - Bad Request, Forms Invalid!");
      }

      const vacinaID = await vacine.create({
        Nome: dados.name,
        Fabricante: dados.fabricante,
        Infos: dados.infos,
        Doses: dados.doses,
        PeriodoAtivo: dados.periodoAtivo,
        EDV: edv,
      });

      res.redirect(`/perfilAdmin?edv=${req.query.edv}`);
    } catch (e) {
      res.redirect("/cadasterVacine");
    }
  },
};
