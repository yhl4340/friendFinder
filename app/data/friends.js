// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
// Your server.js file should require the basic npm packages we've used in class: express and path.
// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5


// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

// var express = require('express');
// var path = require('path');
// var app = express();
// var port = process.env.port || 8080;
// // middle ware for posting data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // routing to the correct folder to retrieve the api route js and html js

// require('./routing/apiRoutes')(app);
// require('./routing/htmlRoutes')(app);

// app.listen(port, function(){
//     console.log('App listening on http//:localhost:'+ port);
// })

var friendsData = [
    {
        name:'Sven',
        pic:'http://images6.fanpop.com/image/photos/35300000/Sven-frozen-35371262-245-246.gif',
        score:[3,5]
    },
    {
        name:'The Pua Pig',
        pic:'https://media1.tenor.com/images/dfe72f5d4629d622647585525362a810/tenor.gif?itemid=12579509',
        score:[1,4]
    },
    
]
module.exports = friendsData;

