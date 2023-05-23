//? Auth va a conetener las turas de autorizacion y autentificacion

//* Login
//* Register
//* Recovery Password -> modificar la contrasña del usuario
//* Verify user

//? Dependencies
const {createUser} = require('../users/users.services')
const authServices = require('./auth.services')

const router = require('express').Router()

//? /api/v1/auth/register
router.post('/register', createUser)

router.post('/login', authServices.login)

module.exports = router