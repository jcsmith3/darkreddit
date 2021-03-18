const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.host,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

module.exports = {
		query: ( query:String, params?:[any]) => pool.query( query, params )
}
