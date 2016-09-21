console.log('users controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function UsersController(){
  this.index = function(req,res){
      res.json({test: "test"})
    }  
    // Friend.find(function(err, friend){
    //   if(err){
    //     res.json({err:err})
    //   }else{
    //     res.json(friend)
    //   }
    // })

  //   // res.json({placeholder: friend});
  // };
  this.create = function(req,res){
    console.log(req.body, '*******************');
    console.log('in the create of the server controller');
    var user= new User(req.body);
    user.save(function(err,user){
      if (err){
        console.log("in the errors")
        res.json({err:err})
      } else{
        res.json({user:user})
      }  
    })
  }

  //   friend.save(function(friend, err){
  //     if(err){
  //       res.json({err:err})
  //     }else{
  //       res.json(friend)
  //     }
  //   })
  //   // res.json({placeholder:'create'});
  // };
  // this.update = function(req,res){
  //   console.log(req.body.first_name);
  //   Friend.update({_id: req.params.id}, {$set: {first_name: req.body.first_name, last_name: req.body.last_name}}, function(err, friend){
  //     if(friend){
  //       res.json(friend)
  //     }else{
  //         res.json({err:err})
  //     }    
  //   })
  // };
  // this.delete = function(req,res){
  //   console.log(req.params.id);
  //   Friend.remove({_id: req.params.id}, function(friend,err){
  //     if (err){
  //       res.json(err)
  //     } else{
  //       res.json(friend)
  //     }
  //   })
    
  // };
  // this.show = function(req,res){
  //   console.log(req.params.id)
  //   Friend.findOne({_id: req.params.id}, function(err, friend){
  //     if(friend){
  //       res.json(friend)
  //     }else{
  //         res.json({err:err})
  //     }    
  //   })
  //   // res.json({placeholder:'show'});
  // };
}
module.exports = new UsersController(); // what does this export?