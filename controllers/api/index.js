const router = require('express').Router();
const commentsRoutes = require('./comments_routes');
const userRoutes = require('./user_routes');
const postsRoutes = require('./posts_routes')


router.use('/comments', commentsRoutes);
router.use('/users', userRoutes);
router.use('/posts', postsRoutes);

module.exports = router;