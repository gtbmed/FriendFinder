// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up express server
const app = express();
// Set the port so that either the port chosen by Heroku is used or port 5000
const PORT = process.env.PORT || 5000;

//Setup BodyParser so our server can interpret the data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing -
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start the server listening on the deisred port
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
