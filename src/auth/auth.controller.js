//? Dependencies
const {comparePassword} = require('../utils/crypto');
const {getUserByEmail} = require('../users/users.controllers');

//* Email y Contrasena del Usuario
//? Email is unique in the DB

//> Login USER
    //! return user if LOGIN OK!!!
    //! return false if LOGIN it's Fail

const loginUser = async (email,passwordPlain) => {
    try {
        const user = await getUserByEmail(email)
        //console.log(user)
        if (user === null) {
            return false
        } else {
            if(user.status === "inactive"){
                return 'inactive';
            } else {
                const verifyPassword = comparePassword(passwordPlain, user.password)
                if (verifyPassword) {
                    return user
                } else {
                return false;
                }
            };
        };

    } catch (err) {
        return err
    }
    
};


module.exports = {
    loginUser
}


//? TEST
/*
loginUser('beta@beta.com','p4s2W0rd*k3y')
    .then(r => { console.log(r)})
    .catch(err => { console.log(err)})
*/
/*
    "email": "adm@admin.com",
    "password": "p4s2W0rd*k3y"

*/


/*
const loginUser = async (email, pass) => {
    const userEmail = await getUserByEmail(email)
        .then(user => {
            if (user !== null) {
                const validation = comparePassword(pass, user.password)
                if (validation) {
                    console.log(user.dataValues)
                    return user
                } else {
                    console.log('Password incorrecto')
                    return false
                }             
            } else {
                console.log(`USER NO REGISTER: ${email}`)
                return false
            }
        })
        .catch(err => {
            err => console.log(err)
        })
};
*/