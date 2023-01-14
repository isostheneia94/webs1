const Pool = require('pg').Pool

const pool = new Pool({
    user: 'max_verbitskiy',
    password: 'root',
    host:'localhost',
    port: 5432,
    database: 'postgres_web',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
