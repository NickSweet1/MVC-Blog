const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Posts, Comments, User} = require('../models');


router.get('/', async (req, res) => {
    //go to data base and get all posts
    res.render('home', {title: 'Home Page'})
})

router.get('/login', async (req, res) => {
    res.render('login', {title: 'Login'})
})

router.get('/register', async (req, res) => {
    res.render('register', {title: 'Register'})
})

// router.post('/register', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = new User({
//             username: req.body.username,
//             password: hashedPassword,
//             email: req.body.email
//         })
//         await user.save();
//         res.redirect('/login')
//     } catch {
//         res.redirect('/register')
//     }
// });

module.exports = router;