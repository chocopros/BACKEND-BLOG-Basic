//? DEPENDENCIES
const categoriesControllers = require('./categories.controllers');

//* >>> SERVICES <<< 

//> CREATE CATEGORY
const newCategory = ( req, res ) => {
    const name = req.body
    if ( !name ) {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                "name": "nameCategory"
            }
        });
    } else {
        categoriesControllers.createCategories(name)
            .then(() => res.status(201).json({message: "Category Created"}))
            .catch( err => res.status(400).json({
                message: err.message,
                error: err.errors[0].message
            }));
    };
};


//> GET ALL CATEGORIES
const getAllCategories = ( req, res) => {
    categoriesControllers.getAllCategories()
        .then( r => res.status(200).json(r))
        .catch(err => res.status(400).json({message: err.message}))
};


//> GET CATEGORIES BY ID
const getCategoryById = ( req , res ) => {
    const id = req.params.id;
    categoriesControllers.getCategoriesById(id)
        .then(r => {
            r ? res.status(200).json(r) : res.status(200).json({message: 'USER NO FOUND'})
        })
        .catch( err => res.status(404).json({message: err.message}) )
};


//> PATH CATEGORIES BY ID
const pathCategory = ( req , res ) => {
    const id = req.params.id;
    const name  = req.body
    categoriesControllers.updateCategories(id, name)
        .then(r => {
            if(r[0]){
                res.status(200).json({message: `User With ID: ${id}, >> Edited succesfully! <<`})
            } else {
                res.status(400).json({message: `Invalid ID`})
            }
        })
        .catch(err => {res.status(400).json({message: err.message})})
};


//> Delete CATEGORIES BY ID
const deleteCategory =  ( req, res ) => {
    const id = req.params.id
    categoriesControllers.destroyCategories(id)
        .then(r => {
            if(r==0){
                res.status(204).json({message: `User With ID: ${id}, >> eliminate succesfully! <<`})
            } else {
                res.status(400).json({message: `Invalid ID`})
            };
        })
        .catch(err => {res.status(400).json({message: err.message})})
};

module.exports = {
    newCategory,
    getAllCategories,
    getCategoryById,
    pathCategory,
    deleteCategory
}