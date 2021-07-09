const express = require('express');
const path = require('path');

const app = express();

//configurando o recebimento do input de usuarios
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Configurando a renderização da views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Definindo as rotas
app.use('/', require('./routes/home.js'));
app.use('/login', require('./routes/login.js'));
app.use('/registro', require('./routes/registro.js'));
app.use('/users', require('./routes/users.js'));

app.listen(3000, () => {
    console.log(`escutando a porta 3000`);
});