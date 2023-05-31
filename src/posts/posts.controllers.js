//? Dependencies
const Posts = require('../models/post.models');
const uuid = require('uuid');

//? MY MODELS DB
const Users = require('../models/users.models');
const Categories = require('../models/categories.models');


//> GET ALL POSTS
const getAllPosts = async () => {
    return await Posts.findAll({
        include: [
            {
                model: Users,
                as: 'usuarios',
                attributes : {
                    exclude: ["password","role","status","isValidated","birthday","createdAt","updatedAt","gender"]
                }
            },
            {
                model: Categories,
                attributes : {
                    exclude: ["id"]
                }
            }
        ],
        attributes: {
            exclude: ['createdAt','updatedAt','categoryId',"userId"]
        }
    })
};

//> GET POST BY ID
const getPostById = async(id) => {
    return await Posts.findOne({
        where: {
            id
        }
    });
};

//> CREATE POST
const createPost = async(data) => {
    const idGenerate = uuid.v4();
    return await Posts.create({
        id: idGenerate,
        title: data.title,
        content: data.content,
        userId: data.userId,
        categoryId: data.categoryId,
    });
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost
};



//* TEST

//> CREATE POST
/*
createPost({title: "HTML", content: 'lorem', userId: 'userId: '88240d09-ad49-44ff-b152-39f42a778bdb',' ,categoriId: 1})
    .then(r => console.log(r))
    .catch(err => console.log(err) )
*/

//> CREATE POST
/*
getPostById('fdf40b77-cac5-467c-bf9c-8901a62337f1')
    .then(r=> console.log(r.dataValues))
    .catch( err => console.log(err))
*/