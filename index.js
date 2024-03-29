const express = require('express');
const path = require('path');

const app = express();

//configurando o recebimento do input de usuarios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static("public"));

//Configurando a renderização da views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Definindo as rotas
app.use('/', require('./routes/home.js'));
app.use('/login', require('./routes/login.js'));
app.use('/registro', require('./routes/registro.js'));
app.use('/users', require('./routes/users.js'));
app.use('/cadastro', require('./routes/cadastro'));
app.use('/update', require('./routes/update'));
app.use('/buscaupdate', require('./routes/buscaupdate'));
app.use('/delete', require('./routes/delete'));
app.use('/buscadelete', require('./routes/buscadelete'));


app.listen(3000, () => {
    console.log(`escutando a porta 3000`);
});