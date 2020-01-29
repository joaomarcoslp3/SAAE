const Employees = require('../models/Employees')

module.exports = {
  async index(req, res){
    const employees = await Employees.findAll();

    return res.json(employees);
  },

  async store(req, res){ 
    const {name, codFunc, password, typeOf} = req.body;
    
    const employees = await Employees.create({ name, codFunc, password, typeOf });

    return res.json(employees);
  } 
}