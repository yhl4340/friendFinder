// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
var path = require ('path');

module.exports = function(app) {
    // the two paths
    app.get('/', function(req, res){
        // why doesnt this work? res.sendFile(path.join(__dirname + '../public/home.html'));

        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/survey', function(rq, rs){
        rs.sendFile(path.join(__dirname, '../public/survey.html'))
    })
};
