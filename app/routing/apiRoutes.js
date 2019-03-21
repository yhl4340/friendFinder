// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(request, resp) {
    resp.json(friendsData);
  });
  app.get('/', function(req,resp){
      resp.sendFile(__dirname ,'home.html')
  });

  app.post("/api/friends", function(reqSent, rly) {
    // capture user input
    var userInput = reqSent.body;
    console.log("line 19, userinput", JSON.stringify(userInput));


    // variables for matches
    var bff = {
      name: "",
      pic: "",
      score: 1000
    };

    var totalDifference = 0;

    // var friendScore = friendsData.score;
    var userScore = userInput.score;
    // function findSum (arr1, arr2){
    //     var sum1 = 0;
    //     var sum2 = 0;

    //     for ( var i = 0; i <friendScore.length; i ++){

    //         sum1=sum1 + friendScore[i];
    //         console.log('friend sum', newFriendSum[i]);
    //     }
    //     for (var j = 0; j< userScore.length; j++){

    //         sum2 = sum2 + userSum[j];
    //         console.log('user sum', userSum);
    //     }
    // }
    // findSum(friendScore,userScore);
    // for (var j = 0; j < userScore.length; j++) {
    //   var userNums = userScore[j];
    //   var userSum = 0;
    //   userSum = userSum + parseInt(userNums[j]);
    //   console.log("user sum 1", userSum);
    // }

    // [3,5],[1,4]
    // loop thru the friendsData arr
    for (var i = 0; i < friendsData.length; i++) {
      var diff = 0;
      var currentFriend = friendsData[i];

      for (var j = 0; j < userScore.length; j++) {
        diff = diff + Math.abs(parseInt(userScore[j]) - parseInt(currentFriend.score[j]));
        console.log(currentFriend.name + " line 42 diff", diff);
      }
      if (diff <= bff.score) {
        bff.name = currentFriend.name;
        bff.pic = currentFriend.pic;
        bff.score = diff;
        console.log(bff.name,'name')
      }
    }
    friendsData.push(userInput);
    console.log(userInput, "userInput");
    rly.json(bff);
  });
};
