// Requirements

const friendData = require("../data/friends"); // Link to friends.js where we store the friend data

// Routing
module.exports = function(app) {
  // a means of getting our data from the API
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });
// a means of posting to our API
// The post request will take in the new friend from the front end and compare against existing friends
//
  app.post("/api/friends", function(req, res) {
  	var newFriend = req.body;
  	var newFriendScores = req.body.scores;
  	var friendMath = [];
  	var bestFriend = [];

  	friendData.forEach(function(existingFriend) { //Use the forEach method to apply calculation to each friend
  		var totalDifference = 0;
	  		for (var i = 0; i < 10; i++) {
	  			totalDiffernce += Math.abs(newFriend.scores[i] - existingFriend.scores[i]);
	  		}
	  		friendMath.push(totalDiffernce); //Add the total difference for each friend to an array
  	});

  	var matchValue = Math.min(friendMath); // Find the lowest value in the array.  This corresponds to the best match
  	// Now we loop through to find all the friends with that lowest value
  	for (var j = 0; j < friendMath.length; j++) {
  		if (friendMath[j] === matchValue) {
  			bestFriend.push(friendData[j]);  // Each time we get a match, we add it to an array.  This allows us to take multiples if they exist.
  		}
  	}
  	res.json(bestFriend);  // Set the matches to the client

  	friendData.push(req.body);  // Finally we add our new friend to our data JSON object.  We do this last to prevent the new user from matching themself.
  });

};
