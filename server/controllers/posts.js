var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

function PostsController(){
  this.index = function(req,res){
      res.json({test: "test"})
    }  


}
module.exports = new PostsController();     