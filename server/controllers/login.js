const db = require('../db/dbConect.js');
const bcrypt = require('bcrypt');

/*
//Gerencia a chamada a página de login
const getLogin = (req, res) =>{
    res.render('login');
}
*/

//Loga o usuário
const logar = async (req, res) =>{
    const {email, senha} = req.body;
    let result = await db.query(`SELECT * FROM usuario WHERE email = '${email}'`);
    if(result.rowCount > 0){
        if(await bcrypt.compare(senha, result.rows[0].senha)){
            //const result = await db.query("SELECT * FROM contato");
            //res.render('users', {contatos: result, resultado: ' '});
        }
        else{
            //res.render('login', {resultado: 'Usuário não Cadastrado'});
        }
    }
    else{
        //res.render('login', {resultado: 'Usuário não Cadastrado'});
    }
}

module.exports = {
    //getLogin,
    logar
}