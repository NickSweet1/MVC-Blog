const express = require('express'); //loads in express library 
const exphbs = require('express-handlebars'); //loads in handlebars library
const dotenv = require('dotenv'); //loads in dotenv libary
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const hbs = exphbs.create({});
const path = require('path');
const routes = require('./controllers');
dotenv.config(); //loads the variables from the .env file

const app = express(); //create instance of the express app

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/comments', require('./controllers/api/comments_routes'));
// app.use('/api/posts', require('./controllers/api/posts_routes'));
// app.use('/api/users', require('./controllers/api/user_routes'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });
