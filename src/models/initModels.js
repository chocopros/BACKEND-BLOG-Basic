//> RELATIONS


//? DEPENDENCIES MODELS
const Categories = require('./categories.models');
const Post = require('./post.models');
const Users = require('./users.models')


const initModels = () => {
    //> 1 -> M
    Post.belongsTo(Users) //? Un Post le pertenece a un Usuario
    Users.hasMany(Post) //? Un usuario tiene muchos Post
    
    //> 1 -> M
    Post.belongsTo(Categories) //? Un post le pertenecea a una categoria
    Categories.hasMany(Post) //? Una categoria tiene muchos Post
};

module.exports = initModels
