const primeiraFuncao = (req, res) =>{
    res.render('login');
}

const logar = (req, res) =>{
    res.send('recebido');
    console.log(req.body);
}

module.exports = {
    primeiraFuncao,
    logar
}