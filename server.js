var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
approot     = __dirname;
var app = express();

app.use(bodyParser.json())


// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

// require(path.join(approot, 'test.js'));
console.log(approot);
// console.log(process.env['APPROOT']);

app.use( express.static( path.join( approot, 'client' )));
app.use( express.static( path.join( approot, 'bower_components' )));

//require mongoose configuration, use path.join to build the route
require(path.join(approot, 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(approot, 'server/config/routes.js'))(app);


//start the server
app.listen(8000, function(){
  console.log('Server is running');
});
