const user = require("../model/user");
const vacine = require("../model/vacine");

module.exports = {
  async admin(req, res) {
    var tableContent = ""
    tableContent += "<tr><td>Nome: </td><td></td></tr>";
    tableContent += "<tr><td>EDV: </td><td></td></tr>";
    tableContent += "<tr><td>Idade: </td><td></td></tr>";
    tableContent += "<tr><td>Email: </td><td></td></tr>";
    res.render("../views/perfilAdmin.ejs", {tableContent, vacines:"",edvGet:req.query.edv});
   
  },

  async adminSearch(req, res) {
    let edvGet = req.query.edv || req.body.EDVSearch || "";
 
    const userSearch = await user.findAll({
      raw: true,
      attributes: ['Nome', 'Email', 'Telefone', 'EDV', 'Idade'],
      where: { EDV: edvGet }
    });

    let tableContent = "";
    if (userSearch.length > 0) {
      tableContent += "<tr><td>Nome: </td><td> " + userSearch[0].Nome + "</td></tr>";
      tableContent += "<tr><td>EDV: </td><td>" + userSearch[0].EDV + "</td></tr>";
      tableContent += "<tr><td>Idade: </td><td>" + userSearch[0].Idade + "</td></tr>";
      tableContent += "<tr><td>Email: </td><td>" + userSearch[0].Email + "</td></tr>";
    } else {
      tableContent += "<tr><td>Nome: </td><td></td></tr>";
      tableContent += "<tr><td>EDV: </td><td></td></tr>";
      tableContent += "<tr><td>Idade: </td><td></td></tr>";
      tableContent += "<tr><td>Email: </td><td></td></tr>";
    }
  
    const vaccines = await vacine.findAll({
      raw: true,
      where: { EDV: edvGet }
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
  
    res.render("../views/perfilAdmin.ejs", {tableContent, vacines, edvGet});
  },
};