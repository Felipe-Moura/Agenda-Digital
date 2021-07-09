const db = require('../db/dbConect');

const primeiraFuncao = (req, res) =>{
    res.render('users');
}

const getUsers = async(req, res) =>{
    const result = await db.query("SELECT * FROM usuario");
    console.table(result.rows);

    res.send({"rows": result.rows});
}

const getCadastro = (req, res) =>{
    res.render('cadastroContato');
}

const updateCadastro = (req, res) =>{
    res.render('updateContato');
}

module.exports = {
    getUsers,
    primeiraFuncao,
    getCadastro,
    updateCadastro
}