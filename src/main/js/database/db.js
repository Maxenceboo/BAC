const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'my_postgres',
        user: 'my_user',
        password: 'my_password',
        database: 'my_db'
    },
    migrations: {
        directory: __dirname + '/migration'
    }
}
);

module.exports = knex;