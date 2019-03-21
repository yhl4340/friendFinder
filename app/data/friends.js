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
        score:[1,3,5,5,4,3,2,5,3,2]
    },
    {
        name:'The Pua Pig',
        pic:'https://media1.tenor.com/images/dfe72f5d4629d622647585525362a810/tenor.gif?itemid=12579509',
        score:[4,1,5,3,2,4,3,2,5,2]
    },
    {
        name:'Dory',
        pic:'https://media.giphy.com/media/Iyt1e8Hq8Xp60/giphy.gif',
        score:[3,4,1,5,2,4,5,5,2,4]
    },
    {
        name:'Vanellope von Schweetz',
        pic:'https://media.giphy.com/media/CBv2i3NhSL3CU/giphy.gif',
        score:[3,2,4,1,5,4,2,3,3,4]
    },
    {
        name:'Olaf',
        pic:'https://media.giphy.com/media/jEzTFBkeHrjgY/giphy.gif',
        score:[3,2,5,2,1,2,3,4,2]
    },
    {
        name:'Tigger',
        pic:'https://media.giphy.com/media/T4ryxpy4m79G8/giphy.gif',
        score:[2,3,4,5,2,1,3,3,2,4]
    },
    {
        name:'Mushu',
        pic:'https://media.giphy.com/media/nC6dJjAC83F4Y/giphy.gif',
        score:[2,4,4,5,3,2,1,3,2,5]
    },
    {
        name:'Baymax',
        pic:'https://media.giphy.com/media/CQw94V8AMa556/giphy.gif',
        score:[5,4,3,2,3,2,5,1,4,2]
    },
    {
        name:'Maximus',
        pic:'https://media.giphy.com/media/GI1kfuiI4Tzgc/giphy.gif',
        score:[2,3,2,5,4,4,2,3,1,3]
    },
    {
        name:'Edna Mode',
        pic:'https://media.giphy.com/media/RXFiL6IR083II/giphy.gif',
        score:[5,4,3,3,5,4,2,3,5,1]
    },
    
]
module.exports = friendsData;

