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


//Gerencia a chamada a página de cadastro de contatos
const getCadastro = (req, res) =>{
    res.render('cadastroContato');
}


//Cadastra um novo contato
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


//Atualiza um contato existente
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


//Genrencia a chamada a página de atualização de contatos
const getUpdateCadastro = (req, res) =>{
    res.render('updateContato', {resultado: ' '});
}


//Busca o contato a ser atualizado e manda suas informações para o front
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


//Gerencia a chamada a página de delete de contatos
const getDeletarContato = async (req, res) => {
    res.render('deleteContato', {resultado: ' '});
}


//Busca o contato a ser deletado e manda suas informações para o front
const buscaDelete = async (req, res) => {
    const {nomeBusca} = req.body;
    result = await db.query(`SELECT * FROM contato WHERE nome = '${nomeBusca}'`);
    if(result.rowCount > 0){
        res.render('deleteBusca', {contato: result});
    }
    else{
        res.render('deleteContato', {resultado: 'Contato não encontrado'});
    }
}


//Deleta o contato
const deletar = async (req, res) => {
    const {idContato} = req.body;
    let result = await db.query(`SELECT * FROM contato WHERE id = '${idContato}'`);
    if(result.rowCount > 0){
        db.query(`DELETE FROM contato WHERE id = '${idContato}'`, (err) =>{
            if(err){
                console.log(err);
                res.send('Erro ao atualizar');
            }
            else{
                res.render('deleteContato', {resultado: 'Deletado com sucesso'});
            }
        });
    }
    else{
        res.render('updateContato', {resultado: 'Contato não encontrado'});
    }
}


module.exports = {
    getUsers,
    filtroUsers,
    getCadastro,
    cadastrando,
    getUpdateCadastro,
    atualizando,
    buscaUpdate,
    getDeletarContato,
    deletar,
    buscaDelete
}