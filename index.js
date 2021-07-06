const express = require('express');
const db = require('./db/dbConect');

const app = express();

app.get('/all', async (req, res) => {
    const result = await db.query("SELECT * FROM usuario");
    console.table(result.rows);

    res.send({"rows": result.rows});
});

app.listen(3000, () => {
    console.log(`escutando a porta 3000`);
});