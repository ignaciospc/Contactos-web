module.exports={
  "development": {
    "username": process.env.DB_USER,
    "password": null,
    "database": process.env.DB_DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
    "operatorAliases": 0
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mysql",
    "operatorAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "mysql",
    "operatorAliases": false
  }
}
