const db = require('../db/dbConect.js');
const { v4 : uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const getRegistro = (req, res) =>{
    res.render('registro');
}

//Verifica se o usuário já está cadastrado, se não, cadastra o novo usuário
const registrar = async(req, res) =>{
    const {nome, email, senha} = req.body;
    let result = await db.query(`SELECT * FROM usuario WHERE nome = '${nome}' OR email = '${email}'`);
    if(result.rowCount > 0){
        //Mudar para um aviso ao usuarui
        res.send({'rows': result.rows});  
    }
    else{
        let identificador = uuidv4();
        let hash = await bcrypt.hash(senha, 5);
        db.query(`INSERT INTO usuario(nome, email, senha, identificador) VALUES ('${nome}', '${email}', '${hash}', '${identificador}')`);
        //Mudar para chamar a página do usuario
        res.send('Cadastrado');
    }
}

module.exports = {
    getRegistro,
    registrar
}