const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.username = userData.username;
        req.session.id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username}})
        console.log(userData);
        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again'})
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password)
        console.log(validPassword);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again'})
            return;
        }
        console.log(userData.id);
        req.session.save(() => {
            req.session.username = userData.username;
            req.session.id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in'})
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;