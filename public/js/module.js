'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {url: '/', template: '<h1>HOME!</h1>'})
    .state('property', {url: '/propertys', templateUrl:'/html/addProperty.html', controller: 'propertyCtrl'})
    .state('tenant', {url: '/tenants', templateUrl:'/html/addTenant.html', controller: 'tenantCtrl'})
    .state('swapi', {url: '/swapi', templateUrl: '/html/swapi.html', controller: 'swapiCtrl'})
  $urlRouterProvider.otherwise('/');
})
