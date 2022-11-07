// Update with your config settings.

module.exports = {

    client: 'mysql',
    connection: {
      database: 'app2',
      user:     'root',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }


};
