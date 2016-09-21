console.log('in the routes');
var users= require('./../controllers/users.js')
var posts= require('./../controllers/posts.js')
var path = require('path');

module.exports = function(app){
  app.get('/users', users.index);
  // app.get('/posts/:id', users.show);
  app.post('/users', users.create);
  // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
  app.get('/posts', posts.index);
}