const puppeteer = require('puppeteer');
const Users = require('../models/Users');

module.exports ={
  async scrape(req, res){
    const userId = await Users.findAll({where:{
      idElet: req.params.idElet
    }});

    const idElet = userId[0].idElet;

    if(idElet !== ''){
      const browser = await puppeteer.launch({ 
        headless: false, 
        path: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
      }); 
      
        const page = await browser.newPage();
        await page.goto('http://autoatendimento.prosanearinfo.com.br/v5.0/index.php?id=A3AQ33E', {waitUntil: 'networkidle2'});
  
        await page.waitFor('input[name=txtcod]');
  
        await page.$eval('input[name=txtcod]', (el, value) => el.value = value, idElet);
  
        await page.click('input[name=Acessar]');
  
        await page.click('li[class=debitos]');
  
        return res.status(200).json(page.url());
    }else{
      return res.status(400).json({ERRO: 'idElet not registred'})
    }
  }
}