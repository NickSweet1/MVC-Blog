const express = require('express'); //loads in express library 
const { Sequelize } = require('sequelize'); //loads in sequelize library
const dotenv = require('dotenv'); //loads in dotenv libary
const PORT = process.env.PORT || 3001;

dotenv.config(); //loads the variables from the .env file

const app = express(); //create instance of the express app

const { User, Posts, Comments } = require('./models'); //import modules from the models folder

app.use(express.json());
app.use('/api/comments', require('./controllers/api/comments_routes'));
app.use('/api/posts', require('./controllers/api/posts_routes'));
app.use('/api/users', require('./controllers/api/user_routes'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})