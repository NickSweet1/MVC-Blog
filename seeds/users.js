const { User } = require("../models");

const userData = [
  {
    username: "TechnoDweeb",
    password: "Tech1sF0n",
    email: "test@test.com",
  },
  {
    username: "VirtualEinstein",
    password: "MVC3001",
    email: "testing@test.com",
  },
  {
    username: "TechForHire33",
    password: "dotenv313",
    email: "testemail@test.com",
  },
];

const seedData = () => User.bulkCreate(userData);

module.exports = seedData;
