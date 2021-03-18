const { query } = require('../index')

const makePostSchema = async () => {
        return await query(`
                CREATE TABLE posts
                (
                        id SERIAL PRIMARY KEY,
                        title TEXT NOT NULL,
                        body TEXT NOT NULL,
                        author int NOT NULL,
                        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                );
                `)
}

makePostSchema()
