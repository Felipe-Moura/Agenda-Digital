const db = require('../db/dbConect');

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

module.exports = {
    buscaUpdate
}