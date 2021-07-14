const db = require('../db/dbConect');

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

module.exports = {
    buscaDelete
}