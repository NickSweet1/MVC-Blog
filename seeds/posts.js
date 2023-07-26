const { Posts } = require('../models');

const postData = {
    title: 'For the beginners',
    text: 'This is a blog post for all the newbies here! Feel free to add a comment and ask any questions to help you feel more comfortable here at Tech Talk!',
    user_id: 1
}

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;