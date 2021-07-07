const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Definindo as rotas
app.use('/', require('./routes/home.js'));
app.use('/login', require('./routes/login.js'));
app.use('/registro', require('./routes/registro.js'));
app.use('/users', require('./routes/users.js'));

app.listen(3000, () => {
    console.log(`escutando a porta 3000`);
});