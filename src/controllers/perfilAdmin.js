const user = require("../model/user");

module.exports = {
  async admin(req, res) {
    res.render("../views/perfilAdmin.ejs");
  },

  async adminSearch(req, res) {
    let edvGet = req.body.EDVSearch;

    console.log(edvGet)

    const userSearch = await user.findAll({
      raw: true,
      attributes: ['IDUser', 'Nome', 'Email', 'Telefone', 'EDV', 'Idade'],
      where: { IDUser: edvGet}
    });

    res.render("../views/perfilAdmin", { userSearch, edvGet: '' });
  }
};
