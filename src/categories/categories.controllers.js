//? Dependencies
const Categories = require('../models/categories.models');

//> CREATE NEW CATEGORIES
const createCategories = async (data) => {
    return await Categories.create({
        name: data.name
    });
};


//> GET ALL CATEGORIES
const getAllCategories = async () => {
    return await Categories.findAll();
};


//> GET CATEGORY BY ID
const getCategoriesById = async(id) => {
    return await Categories.findOne({
        where: {
            id
        }
    })
};


//> UPDATE CATEGORIES
const updateCategories = async (id, data) => {
    return await Categories.update(data,{
        where: {
            id
        }
    });
};


//> DELETE CATEGORIES
const deleteCategories = async(id) => {
    return await Categories.destroy({
        where: {
            id
        }
    })
};



module.exports = {
    createCategories,
    getAllCategories,
    updateCategories,
    deleteCategories
};


// **TEST** //

//> CREATE NEW CATEGORIES
/*
createCategories({name: "Nodees"})
    .then(r => console.log(`create categorie:-->`, r.dataValues))
    .catch(err => console.log(err))
*/


//> GET ALL CATEGORIES
/*
getAllCategories()
    .then(r => console.log(` ---> Existen ${r.length} Categories <--- `, r))
    .catch(err => console.log(err))
*/


//> GET CATEGORIES BY ID
/*
getCategoriesById(2)
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/

//> PATH CATEGORIES BY ID
/*
updateCategories(1,{name: "Node"})
    .then(r => console.log(r))
    .catch(err => console.log(err))
*/


//> DELETE CATETGORIES ID
/*
deleteCategories(5)
    .then(r => console.log(r))
    .catch(err => console.log(err))
    */