const db = require('../db/dbConect');

//Gerencia a chamada a página de delete de contatos
const getDeletarContato = async (req, res) => {
    res.render('deleteContato', {resultado: ' '});
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
    getDeletarContato,
    deletar
}