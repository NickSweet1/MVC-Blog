const router = require('express').Router();
const { Posts, Comments, User} = require('../models');


router.get('/', async (req, res) => {
    // go to data base and get all posts with login user
    res.render('dashboard', {title: 'Dashboard'})
})

module.exports = router;