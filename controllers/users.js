const db = require('../db/dbConect');

/*
const getUsers = async (req, res) =>{
    const tabela = await getContatos();
    console.log(tabela);
    res.render('users', {tabelaContatos: tabela[0].nome});
}


const getContatos = async () =>{
    const result = await db.query("SELECT * FROM contato");
    //console.log(result.rows);
    return result.rows;
}*/

const getUsers = async (req, res) =>{
    const result = await db.query("SELECT * FROM contato");
    res.render('users', {contatos: result});
}

const getCadastro = (req, res) =>{
    res.render('cadastroContato');
}


const cadastrando = async (req, res) =>{
    const {nomeContato, telefoneContato, emailContato, enderecoContato, cidadeContato, cepContato, grupoContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE nome = '${nomeContato}'`);
    if(result.rowCount > 0){
        //Mudar para um alerta ao usuario
        res.send('Contato já cadastrado')
    }
    else{
        db.query(`INSERT INTO contato(nome, telefone, email, endereco, cidade, cep, grupo) VALUES ('${nomeContato}', '${telefoneContato}', '${emailContato}', '${enderecoContato}', '${cidadeContato}', '${cepContato}', '${grupoContato}')`);
        //Mudar para algo mais intuitivo
        res.send('Contato cadastrado');
    }
}


const atualizando = async (req, res) =>{
    const {idContato ,nomeContato, telefoneContato, emailContato, enderecoContato, cidadeContato, cepContato, grupoContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE id = '${idContato}'`);
    if(result.rowCount > 0){
        db.query(`UPDATE contato SET nome = '${nomeContato}', telefone = '${telefoneContato}', email = '${emailContato}', endereco = '${enderecoContato}', cidade = '${cidadeContato}', cep = '${cepContato}', grupo = '${grupoContato}' WHERE id = '${idContato}'`, (err) =>{
            if(err){
                console.log(err);
                res.send('Erro ao atualizar');
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


const getUpdateCadastro = (req, res) =>{
    res.render('updateContato', {resultado: ' '});
}


const buscaUpdate = async (req, res) =>{
    const {nomeBusca} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE nome = '${nomeBusca}'`);
    if(result.rowCount > 0){
        res.render('updateBusca', {contato: result});
    }
    else{
        res.render('updateContato', {resultado: 'Contato não encontrado'});
    }
}


module.exports = {
    getUsers,
    getCadastro,
    cadastrando,
    getUpdateCadastro,
    atualizando,
    buscaUpdate
}