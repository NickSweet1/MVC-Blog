const sequelize = require('../config/connection');
const seedComments = require('./comments');
const seedPosts = require('./posts');
const seedUsers = require('./users');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();
  await seedUsers();
  await seedPosts();

  process.exit(0);
};

seedAll();