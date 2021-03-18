const { query } = require('./database/dbconfig')

const test = async () => { 
		const { rows } = await query('SELECT NOW()')
		console.log(rows[0].now)
}

test()

