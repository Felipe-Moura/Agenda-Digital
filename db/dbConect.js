const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/../.env`
});

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: '5432',
    max: 10,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 30000
});


module.exports = pool;
