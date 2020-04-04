const Users = require('../models/Users');

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
    try{
    const {name, idElet, password, adress, email} = req.body;

    if(await Users.findOne( { idElet } )){
    res.status(400).send({ error:'idElet already exists' })
    }
    
    const users = await Users.create({ name, idElet, password, adress, email });

    return res.json(users);
  }catch(err){
    res.status(400).send({ error:'Registration failed' })
  }
  },

  async remove(req, res){ 
    const users = await Users.destroy({where:{
        idElet: req.params.idElet
    }});
    return res.json(users)
  }
}