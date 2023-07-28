const router = require('express').Router();
const { Posts, Comments, User} = require('../models');


router.get('/', async (req, res) => {
    res.render('home', {title: 'Home Page'})
})

module.exports = router;