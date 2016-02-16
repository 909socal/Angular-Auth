'use strict';

var app = angular.module('someApp');

app.controller('regCtrl', ["$scope","$log", "$http", function($scope, $log, $http) {
  $scope.regClick = function(){

    var email = $scope.regEmail

    if ($scope.regPass !==  $scope.regPass2){
      return swal("Sorry, Passwords do not match ")
      $log.warn("Passwords dont Match")
    }
    else{
      var password = $scope.regPass
      swal('Registration Completed')
      $log.info('well done sir')
      
    }
    console.log("email:", email, "password:", password)
    $http.post('/users/register', {email: email, password: password})
      .then(function(res ){

      },function(err){
        console.log(err)
      })
  }
  console.log('regCtrl');
}]);

