//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database'); //Estableciendo Conexion a DB


//! MODELS 
const Users = require('../models/users.models');
const Categories = require('./categories.models');


//> TABLE OF ALL POST
const Post = db.define('posts', {
    
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createBy: { //! llave foranea de users
        defaultValue: 'create_by',
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    categoryId: { //! llave foranea de category
        defaultValue: 'category_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Categories
        }
    }


});

module.exports = Post