const puppeteer = require('puppeteer');
const Users = require('../models/Users');

module.exports ={
  async scrape(req, res){
    const userId = await Users.findAll({where:{
      idElet: req.params.idElet
    }});
    
    const browser = await puppeteer.launch({ 
      headless: true, 
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    }); 
    try{
    const page = await browser.newPage();
    await page.goto('http://autoatendimento.prosanearinfo.com.br/v5.0/index.php?id=A3AQ33E');
    
    let dados = []

    await page.waitFor(3000);

    return res.status(200).json({idElet: userId[0].idElet})
    }catch(err){
      try {
        await page.reload(); // soft fix
    }catch (recoveringErr) {
      res.status(500).json({ERROR: 'Não foi possível acessar a página'})
    }
  }
}
}