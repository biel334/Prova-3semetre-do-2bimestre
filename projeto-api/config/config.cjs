module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'api_rest_db',
    host: 'postgres-container',
    dialect: 'postgres'
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'api_rest_db',
    host: 'postgres-container',
    dialect: 'postgres'
  }
};
