// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./db/index");
require;
// default value for title local
const projectName = "ProjectDark";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1);

app.locals.title = `${capitalized(projectName)} created with love `;
// url middleware for id
app.use(express.urlencoded({ extended: false }));
// 👇 Start handling routes here
const index = require("./routes/index");
// Routes for members
const register = require("./routes/menbers/register");
const member = require("./routes/menbers/memberDetails");
// Routes for the projects
const oneProject = require("./routes/projects/createProject");
app.use("/", index);
app.use(register);
app.use(member);
app.use(oneProject);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
