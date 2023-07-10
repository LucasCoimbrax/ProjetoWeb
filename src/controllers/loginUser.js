const user = require("../model/user");

module.exports = {
  async loginUser(req, res) {
    res.render("../views/loginUser", {message: false});
  },

  async confererUser(req, res) {
    const login = req.body;

    try {
      const userEDV = await user.findOne({
        raw: true,
        attributes: ['EDV', 'Nome', 'Email', 'Telefone','DataNascimento'],
        where: { EDV: login.edv, DataNascimento: login.dateBirth}
      });

      if (!userEDV) {
        return res.render('../views/loginUser', {message: true})        
      }

      res.redirect(`/perfilUser?EDV=${login.edv}`);
    } catch (e) {
      res.redirect("/");
    }
  }
};
