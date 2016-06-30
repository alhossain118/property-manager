'use strict';

var app = angular.module('myApp');

app.service('Samurai', function($http){
  this.getAll = () => {
    return $http.get('/api/samurai');
  }
})
