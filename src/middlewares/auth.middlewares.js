//? Dependencies

const { jwtSecret } = require('../config');
const { getUserByID } = require('../users/users.controllers');


//? Middleware para proteger rutas

// 1- Revisar si existe un token
// 2- verificar si el token pertenece a un usuario
// 3- Modificar el req y agregar req.user con la informacion desencriptada del token


//? estrategia: Difetentes maneras de hacer login(con facebook, google, JWT, Github)
const JwtStrategy = require('passport-jwt').Strategy; //? Passoport maneja diferentes estrategias para las diferentes auntetificaciones
const ExtractJwt = require('passport-jwt').ExtractJwt; //? Extrae los header de la peticion

module.exports = (passport) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), //?ir a los header de la peticion
        secretOrKey: jwtSecret
    };

    passport.use(
        new JwtStrategy(options, async(decoded, done) => {
            //? done(error, decoded)
            try {
                const response = await getUserByID(decoded.id)
                
                if(!response){
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(null, false)
            };
        })
    );
};