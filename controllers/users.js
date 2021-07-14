const db = require('../db/dbConect');


//Gerencia a chamada a página inicial dos usuaros
const getUsers = async (req, res) =>{
    const result = await db.query("SELECT * FROM contato");
    res.render('users', {contatos: result, resultado: ' '});
}


//Faz o busca no banco de contatos com os filtros especificados
const filtroUsers = async (req, res) =>{
    const {nomeContato, telefoneContato, emailContato, enderecoContato, cidadeContato, cepContato, grupoContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE nome = '${nomeContato}' OR telefone = '${telefoneContato}' OR email = '${emailContato}' OR endereco = '${enderecoContato}' OR cidade = '${cidadeContato}' OR cep = '${cepContato}' OR grupo = '${grupoContato}'`);
    if(result.rowCount > 0){
        res.render('users', {contatos: result, resultado: ' '});
    }
    else{
        let all = await db.query(`SELECT * FROM contato`);
        res.render('users', {contatos: all, resultado: 'Nada encontrado'});
    }
}


module.exports = {
    getUsers,
    filtroUsers,
}