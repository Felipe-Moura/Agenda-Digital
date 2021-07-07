const db = require('../db/dbConect');

const getUsers = async(req, res) =>{
    const result = await db.query("SELECT * FROM usuario");
    console.table(result.rows);

    res.send({"rows": result.rows});
}

module.exports = {
    getUsers
}