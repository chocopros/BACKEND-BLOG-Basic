//? Dependencies

const postControllers = require('./posts.controllers')

//* >>> SERVICES <<<

//> GET ALL POSTS
const getAllPosts = ( req, res ) => {
    postControllers.getAllPosts()
        .then(r => res.status(200).json({r}))
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
    const userId = req.user.id
    const {title,content,categoryId} = req.body

    if ( title && content && categoryId && userId ) {
        postControllers.createPost({title,content,userId,categoryId})
            .then(r=> {res.status(201).json({r})})
            .catch(err => res.status(400).json({
                message: err.message,
                error: err.errors[0].message
            }))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            fields: {
                title: "string",
                conten: "string",
                categoryId: "number",
            }
        });
    };
};

module.exports = {
    newPost,
    getAllPostById,
    getAllPosts
};