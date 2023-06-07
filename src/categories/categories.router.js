const router = require('express').Router();

const categoryServices = require('./categories.services');
const postsServices = require('../posts/posts.services')

//> ROUTE CATEGORIES
router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.newCategory);
    

router.route('/:id')
    .get(categoryServices.getCategoryById)
    .patch(categoryServices.pathCategory)
    .delete(categoryServices.deleteCategory);

router.get('/:id/posts',postsServices.getPostsByCategory);

module.exports = router;