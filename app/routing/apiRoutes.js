
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
var friendsData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends',function(request, resp){
        resp.json(friendsData);
    });
    app.post('/api/friends',function(reqSent, rly){
        // capture user input
        var userInput = req.body;
        console.log('input: ' + userInput);
        // getting user's score
        var userScore = userInput.score;
        console.log('score: '+ userScore);

        // variables for matches
        var bff = 
            {
                name:'',
                pic: '',
                score: 40
            }
        
        var matchImg;
        
       

        // loop thru the friendsData arr
        for ( var i = 0; i < friendsData.length; i++){
            var totalDifference = 0;
            for(var j = 0; j< userScore.length; j ++){
                diff = Math.abs(friendsData[j].score - userScore[j]);
                console.log('diff', diff);
                var totalDifference = diff + totalDifference;
                console.log('total', totalDifference);
                if(totalDifference <= bff.score){
                    bff.name = friendsData[i].name;
                    bff.pic = friendsData[i].pic;
                    bff.score = friendsData[i].score;
                }
            }
        }
        friendsData.push(userInput);
        res.json(bff);
    })
}