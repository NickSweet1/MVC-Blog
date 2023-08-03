// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

const User  = require('./user');
const Posts = require('./post');
const Comments = require('./comments');

// User.hasMany(Posts, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// })

// User.hasMany(Comments, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// })

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Comments.belongsTo(Posts, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE',
// })

module.exports = { Comments, User, Posts }