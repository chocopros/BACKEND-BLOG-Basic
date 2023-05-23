//todo con respecto a la conexion

const config = require('../config')

const { Sequelize } = require('sequelize');

const db = new Sequelize ({
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name
});

module.exports =  db;