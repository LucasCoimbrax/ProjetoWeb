const user = require("../model/user");

module.exports = {
  async admin(req, res) {
    res.render("../views/perfilAdmin.ejs");
  },

  async adminSearch(req, res) {
    let edvGet = req.body.EDVSearch;

    try{
      if(!edvGet){
        throw new Error("400 - Bad Request, EDV Invalid!")
      }
  
      const userSearch = await user.findAll({
        raw: true,
        attributes: ['IDUser', 'Nome', 'Email', 'Telefone', 'EDV', 'Idade'],
        where: { IDUser: edvGet}
      });
  
      console.log(userSearch);
  
      res.render("../views/perfilAdmin", { userSearch, edvGet: '' });
    }catch(e){
      console.log(e);
      res.redirect('/perfilAdmin')
    }
    
  }
};
