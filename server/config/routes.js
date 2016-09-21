console.log('in the routes');
var users= require('./../controllers/users.js')
var path = require('path');

module.exports = function(app){
  app.get('/users', users.index);
  // app.get('/friends/:id', friends.show);
  app.post('/users', users.create);
  // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
}