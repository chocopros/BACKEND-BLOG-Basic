//? Dependencies
const Posts = require('../models/post.models')


//> GET ALL POSTS
const getAllPosts = async () => {
    return await Posts.findAll()
};

