const user = require("../model/user");

module.exports = {
  async user(req, res) {
    res.render("../views/cadasterUser");
  },

  async cadasterUser(req, res) {
    const dados = req.body;

    try {
      let foto = "user.png";

      if (req.file) {
        foto = req.file.filename;
      }

      const anoNascimento = dados.dateBirth.split("-")[0];
      const anoAtual = new Date().getFullYear();

      const idade = anoAtual - anoNascimento;

      if (idade > 120 || idade < 16) {
        throw new Error("401 - Age Incorrect!");
      }

      const phoneUser = dados.phone.replace(" ", "").replace("(","").replace(")","");

      await user.create({
        EDV: dados.edv,
        Nome: dados.name,
        Email: dados.email,
        Telefone: phoneUser,
        Idade: idade,
        DateBirth: dados.dateBirth,
        Foto: foto,
      });
      console.log("201 - User Created Successful")
      res.redirect("/perfilAdmin");
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
};
