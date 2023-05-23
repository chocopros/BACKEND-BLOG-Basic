//* REGISTER OF CATEGORIES

//? Dependencies
const {DataTypes} = require('sequelize');
const db = require('../utils/database') //Estableciendo Conexion a DB

const Categories = db.define('categories', {
    
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    }


},{
    timestamps: false //! Evita que sequelize agregue las columnas createAt y updateAt
});

module.exports = Categories