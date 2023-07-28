const router = require('express').Router();
const { Posts, Comments, User} = require('../models');


router.get('/', async (req, res) => {
    res.render('dashboard', {title: 'Dashboard'})
})

module.exports = router;