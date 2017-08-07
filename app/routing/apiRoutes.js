// Requirements

const friendData= require("../data/friends"); // Link to friends.js where we store the friend data

// Routing
module.exports = function(app) {
  // a means of getting our data from the API
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });
// a means of posting to our API
  app.poost("/api/friends", function(req, res) {

  });

}
