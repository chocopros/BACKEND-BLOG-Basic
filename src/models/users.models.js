const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Users = db.define('users', {

    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        field: 'first_name',
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastName: {
        field: 'last_name',
        type: DataTypes.STRING(30),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'user'
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    isValidated: {
        field: 'is_validated',
        type: DataTypes.BOOLEAN,
        allowNull: false   
    }
   
});

module.exports = Users