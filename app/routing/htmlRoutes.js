// DEPENDENCIES
const path = require('path');

//HTML Routing
module.exports = function(app) {
  // Direct to survey page
  app.get("/survey", function (req,res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
  });
  // Default to Homepage
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
