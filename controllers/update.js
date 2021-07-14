const db = require('../db/dbConect');

//Genrencia a chamada a página de atualização de contatos
const getUpdateCadastro = (req, res) =>{
    res.render('updateContato', {resultado: ' '});
}

//Atualiza um contato existente
const atualizando = async (req, res) =>{
    const {idContato ,nomeContato, telefoneContato, emailContato, enderecoContato, cidadeContato, cepContato, grupoContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE id = '${idContato}'`);
    if(result.rowCount > 0){
        db.query(`UPDATE contato SET nome = '${nomeContato}', telefone = '${telefoneContato}', email = '${emailContato}', endereco = '${enderecoContato}', cidade = '${cidadeContato}', cep = '${cepContato}', grupo = '${grupoContato}' WHERE id = '${idContato}'`, (err) =>{
            if(err){
                res.render('updateContato', {resultado: 'Erro ao atualizar'});
            }
            else{
                res.render('updateContato', {resultado: 'Atualizado com sucesso'});
            }
        });
    }
    else{
        res.render('updateContato', {resultado: 'Contato não encontrado'});
    }
}


module.exports = {
    getUpdateCadastro,
    atualizando
}