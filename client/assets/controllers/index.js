myApp.controller('indexController', ['$scope','usersFactory', '$routeParams', function($scope, usersFactory, $routeParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial - 
    so we didn't set a variable so we could reuse it - 
    we just run the friendsFactory method directly.
  */

  $scope.index =function(){
    form_data= $scope.newUser;
    console.log(form_data);
    usersFactory.index(form_data);
  }
// $scope.show= function () {
//   var id= $routeParams.id;
//   // console.log(id);
//   friendsFactory.show(id, function(returnedData){
//   // console.log(returnedData);
//   $scope.friend = returnedData.data;
//   // console.log($scope.friend);
// });

// }
// $scope.show();

// $scope.update= function () {
//   var id= $routeParams.id;
//   $scope.editedUser.id = id;
//   var editedUser= $scope.editedUser;
//   // console.log(editedUser);
//   friendsFactory.update(editedUser, function(returnedData){
  
// });
//   window.location = '#/show/'+ id;
//   // $scope.show();
// }



  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method 
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see 
    all of the friends when we get back including the updated on??  
    See Index in the previous controller.
  */
}]);