// DEPENDENCIES
const path = require('path');

//HTML Routing
module.exports = function(app) {
  // Direct to survey page
  app.get("/survey", function (res,req) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"))
  });
  // Default to Homepage
  app.use(function (res, req) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
