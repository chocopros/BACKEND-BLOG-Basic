//? DEPENDENCIES
const router = require('express').Router();
const passport = require('passport');

const postServices = require('./posts.services');
require('../middlewares/auth.middlewares')(passport)

//* >>> ROUTER <<<

router.route('/')
    .get(postServices.getAllPosts)
    .post(
        passport.authenticate('jwt', {session: false}),
        postServices.newPost
    )

module.exports = router