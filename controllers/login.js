const db = require('../db/dbConect.js');
const bcrypt = require('bcrypt');

//Gerencia a chamada a página de login
const getLogin = (req, res) =>{
    res.render('login');
}

//Loga o usuário
const logar = async (req, res) =>{
    const {email, senha} = req.body;
    let result = await db.query(`SELECT * FROM usuario WHERE email = '${email}'`);
    if(result.rowCount > 0){
        if(await bcrypt.compare(senha, result.rows[0].senha)){
            //Redirecionar para a página do usuario
            res.send('logado');
        }
        else{
            //Mudar para um aviso ao usuario
            res.send('Usuario não cadastrado');
        }
    }
    else{
        res.send('Usuario não cadastrado')
    }
}

module.exports = {
    getLogin,
    logar
}