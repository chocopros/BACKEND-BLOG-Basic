//> RELATIONS


//? DEPENDENCIES MODELS
const Categories = require('./categories.models');
const Posts = require('./post.models');
const Users = require('./users.models')


const initModels = () => {

    //* has model1.hasOne(model2) model 2 tiene la llave foranea

    //* belongs model2.belongsTo(model1) model 2 tiene la llave foranea 

    //? fk = posts
    //? 1 publicacion pertenece a 1 categoria
    Posts.belongsTo(Categories)
    //? 1 categoria tiene muchas publicaciones
    Categories.hasMany(Posts)

    //? fk = posts
    //? 1 publicación petenece a 1 usuario
    Posts.belongsTo(Users)
    //? 1 usuario tiene muchas publicaciones
    Users.hasMany(Posts)

};

module.exports = initModels


/*

?    1:1 
*    belongsTo
*    hasOne

?    1:M 
*    belongsTo
*    hasMany

?    M:M 
*    belongsToMany
*    hasMany

?    2 relaciones 1:M
*    belongsTo
*    hasMany

*/
