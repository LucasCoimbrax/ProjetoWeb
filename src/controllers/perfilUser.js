const user = require("../model/user");
const vacine = require("../model/vacine");

module.exports = {
  async user(req, res) {
    const u = await user.findByPk(req.query.EDV);

    let edvGet = req.query.EDV;

    try{
        const vaccines = await vacine.findAll({
            raw: true,
            attributes: [
              "Nome",
              "Fabricante",
              "Infos",
              "Doses",
              "PeriodoAtivo",
              "createdAt",
            ],
            where: { EDV: edvGet },
          });
          let vacines = "";
          for (let i = 0; i < vaccines.length; i++) {
            const createdAt = new Date(vaccines[i].createdAt);
            const formattedDate = createdAt.toLocaleDateString("pt-BR");
            vacines += "<tr>";
            vacines += "<td>" + vaccines[i].Nome + "</td>";
            vacines += "<td>" + vaccines[i].Fabricante + "</td>";
            vacines += "<td>" + vaccines[i].Infos + "</td>";
            vacines += "<td>" + vaccines[i].Doses + "</td>";
            vacines += "<td>" + vaccines[i].PeriodoAtivo + "</td>";
            vacines += "<td>" + formattedDate + "</td>";
            vacines += "</tr>";
          }
      
          res.render("../views/perfilUser.ejs", { user: u, vacines });
    }catch (e) {
        re.redirect("/")
    }
  },

  async insertFoto(req, res) {
    console.log(req.body);
    const u = await user.findByPk(req.query.EDV);
    await user.update(
      {
        Foto: req.file.filename,
      },
      { where: { EDV: req.query.EDV } }
    );
    res.redirect(`/perfilUser?EDV=${req.query.EDV}`);
  },

  async logout(req, res){
    res.redirect("/");
}
};
