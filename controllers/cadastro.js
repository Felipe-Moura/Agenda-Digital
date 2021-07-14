const db = require('../db/dbConect');

//Gerencia a chamada a página de cadastro de contatos
const getCadastro = (req, res) =>{
    res.render('cadastroContato', {resultado: ' '});
}


//Cadastra um novo contato
const cadastrando = async (req, res) =>{
    const {nomeContato, telefoneContato, emailContato, enderecoContato, cidadeContato, cepContato, grupoContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE nome = '${nomeContato}'`);
    if(result.rowCount > 0){
        res.render('cadastroContato', {resultado: 'Contato já cadastrado'});
    }
    else{
        db.query(`INSERT INTO contato(nome, telefone, email, endereco, cidade, cep, grupo) VALUES ('${nomeContato}', '${telefoneContato}', '${emailContato}', '${enderecoContato}', '${cidadeContato}', '${cepContato}', '${grupoContato}')`);
        res.render('cadastroContato', {resultado: 'Contato cadastrado'});
    }
}

module.exports = {
    getCadastro,
    cadastrando
}