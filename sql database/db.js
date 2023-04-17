const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'Letsdoit!',
  port: 5433,
})

module.exports = pool;