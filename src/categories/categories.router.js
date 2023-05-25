const router = require('express').Router();

const categoryServices = require('./categories.services');

//> ROUTE CATEGORIES
router.route('/')
    .get(categoryServices.getAllCategories)
    .post(categoryServices.newCategory);
    

router.route('/:id')
    .get(categoryServices.getCategoryById)
    .patch(categoryServices.pathCategory)
    .delete(categoryServices.deleteCategory);

module.exports = router;