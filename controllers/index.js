const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homepage')
const dashboard = require('./dashboard')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);


module.exports = router;