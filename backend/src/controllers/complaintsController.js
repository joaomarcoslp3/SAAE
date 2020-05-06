const User = require('../models/Users');
const Complaints = require('../models/Complaints');

module.exports ={

  async index(req, res){
    const complaint = await Complaints.findAll();

    return res.json(complaint);
  },
  
  async store(req, res) {
    
    const { user_id } = req.params;
    const { complaint_text, complaint_picture, complaint_latitude, complaint_longitude } = req.body;

    const user = await User.findByPk(user_id);

    if (!user){
      return res.status(400).json( { error: 'User not Found' } )
    }

    const complaint = await Complaints.create({
      complaint_text,
      complaint_picture,
      complaint_latitude,
       complaint_longitude,
      user_id
    });

    return res.json(complaint);
  },

  async findOne(req, res){

    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'complaints' }
    });

    return res.json(user)
    //para achar apenas as reclamações use o código abaixo
    //return res.json(user.complaints)
    
    },
    async remove(req, res){ 
      const complaint = await Complaints.destroy({where:{
          id: req.params.id
      }});
      return res.json(complaint)
    }
 }



