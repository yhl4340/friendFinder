var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 8080;
// middle ware for posting data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/app/public")));

// routing to the correct folder to retrieve the api route js and html js

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(port, function(){
    console.log('App listening on http://localhost:'+ port);
});