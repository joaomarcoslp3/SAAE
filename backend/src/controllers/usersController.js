const Users = require('../models/Users')

module.exports = {
  async index(req, res){
    const users = await Users.findAll();

    return res.json(users);
  },
  
  async findOne(req, res){
    const users = await Users.findAll({where:{
      idElet: req.params.idElet
    }});

    return res.json(users);
  },

  async store(req, res){ 
    const {name, idElet, password, adress, email} = req.body;
    
    const users = await Users.create({ name, idElet, password, adress, email });

    return res.json(users);
  },

  async remove(req, res){ 
    const users = await Users.destroy({where:{
        idElet: req.params.idElet
    }});
    return res.json(users)
  }
}