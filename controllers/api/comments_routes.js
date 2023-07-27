const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    const allComments = await Comment.findAll();
    try {
        res.status(200).json(allComments);
    } catch {
        res.status(500).json({ message: "Error finding comments."})
    }
})

module.exports = router;