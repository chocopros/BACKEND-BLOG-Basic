// Encriptar y comparar las contraseñas

const bcrypt = require('bcrypt')

//? hashear contraseña 
const hashPassword = plainPassword => {
    return hashedPassword = bcrypt.hashSync(plainPassword,10) //10 --> numero de veces q va a hashear (default:10)
};

//? comparar si la contrasela plaint es igual a su hashed
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword,hashedPassword)
};


module.exports = {
    hashPassword,
    comparePassword
};

//> TEST
//console.log(hashPassword('contraseña1234'))
//console.log(comparePassword('contraseña1234','$2b$10$4USc3qNeWOE3tM2VzZSqKec4YA27UicnuogFHzZw/NqLjrWf0jihi')) // return true or false