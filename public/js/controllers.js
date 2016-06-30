'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');
  $scope.something='red'
});

app.controller('swapiCtrl', function($scope,$state,Samurai){
  // console.log("swapiCtrl!!");
  // $scope.something = 'blue'
  console.log($state);
  Samurai.getAll()
    .then(res => {
      console.log("res:", res);
      $scope.samurai = res.data
    })
    .catch(err => {
      console.error(err);
    })

  $scope.clickButton = function(){
    $state.go('home')
  }
})
