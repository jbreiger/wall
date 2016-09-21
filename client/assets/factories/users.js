console.log('Users Factory');

myApp.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = ['asd'];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend){
      console.log('hello');
      console.log(newfriend);
      friends.push(newfriend);
      console.log(friends);
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data);
        
        // console.log("the returned data is", returned_data.data);
        // if (typeof(callback) == 'function'){
          // callback(returned_data.data);
        // }
      });
    };
    this.update = function(editedUser, callback){ // what parameters do we need?
      // console.log(editedUser);
      // console.log(editedUser.id);
      $http.put('/friends/' + editedUser.id, editedUser).then(function(returned_data){
          callback("user updated");
      })
    };
    
    this.index= function(){
    	console.log('test')
    }




  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}]);