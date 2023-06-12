//? Dependencies

const postControllers = require('./posts.controllers')

//* >>> SERVICES <<<

//> GET ALL POSTS
const getAllPosts = ( req, res ) => {

    //? localhost:16000/api/v1/posts?offset=0&limit=10
    const { offset, limit } = req.params

    postControllers.getAllPosts()
        .then(posts => res.status(200).json({
            post_count: posts.length,
            offset: offset,
            limit: limit,
            result: posts
        }))
        .catch(err => res.status(400).json(err))
};

//> GET POST BY ID
const getAllPostById = ( req, res ) => {
    const {id} = req.params.id
    postControllers.getPostById(id)
        .then(r => {
            if (r) {
                res.status(200).json({r})
            } else {
                res.status(404).json({message: "ID Invalid"})
            } 
        })
        .catch( err => res.status(400).json({message: err}))
};

//> CREATE POST
const newPost = ( req, res ) => {
    const userId = req.user.id;
    //console.log(userId)
    const {title,content,categoryId} = req.body

    if ( title && content && categoryId && userId ) {
        postControllers.createPost({title,content,userId,categoryId})
            .then(r=> {res.status(201).json({r})})
            .catch(err => res.status(400).json({
                message: err.message,
                error: err
            }))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            fields: {
                title: "string",
                content: "string",
                categoryId: "number",
            }
        });
    };
};

//> GET POST BY CATEGORY
const getPostsByCategory = ( req, res ) => {
    const idCategory = req.params.id;
    postControllers.getPostByCategory(idCategory)
        .then(r => res.status(200).json(r))
        .catch(err => res.status(400).json({message: err.message}))
};


module.exports = {
    newPost,
    getAllPostById,
    getAllPosts,
    getPostsByCategory
};