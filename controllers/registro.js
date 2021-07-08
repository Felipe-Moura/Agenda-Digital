
const primeiraFuncao = (req, res) =>{
    res.render('registro');
}

const registrar = (req, res) =>{
    res.send('recebido');
    console.log(req.body);
}

module.exports = {
    primeiraFuncao,
    registrar
}