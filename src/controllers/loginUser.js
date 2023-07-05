module.exports = {
  async loginUser(req, res) {
    res.render("../views/loginUser");
  },

  async confererUser(req, res) {
    const login = req.body;

    console.log(login)

    try {
      const edv = '12341234';
      const dateBirth = '2000-01-01';

      if (edv != login.edv || dateBirth != login.dateBirth) {
        throw new Error("401 - Unauntho");
      }

      res.redirect("/perfilUser");
    } catch (e) {
      console.log(e);
      res.redirect("/");
    }
  },
};
