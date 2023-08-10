const express = require("express"); //loads in express library
const exphbs = require("express-handlebars"); //loads in handlebars library
const session = require('express-session');
const dotenv = require("dotenv"); //loads in dotenv libary
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const hbs = exphbs.create({});
const path = require("path");
const routes = require("./controllers");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
dotenv.config(); //loads the variables from the .env file

const app = express(); //create instance of the express app

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
