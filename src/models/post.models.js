//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database'); //Estableciendo Conexion a DB


//! MODELS 
const Users = require('../models/users.models');
const Categories = require('./categories.models');


//> TABLE OF ALL POST
const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
           key: 'id',
           model: Users
        }
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
           key: 'id',
           model: Categories
        }
    }
});

module.exports = Posts