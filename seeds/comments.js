const { Comments } = require('../models');
const sequelize = require('sequelize')

const postComments = [{
    text: 'This is a blog post for all the newbies here! Feel free to add a comment and ask any questions to help you feel more comfortable here at Tech Talk!',
    post_id: 1,
    user_id: 1,
},
]
const seedComments = () => Comments.bulkCreate(postComments);


module.exports = seedComments;