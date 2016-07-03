'use strict';

var app = angular.module('myApp');

app.service('Tenant', function($http){
  this.getAll = () => {
    return $http.get('/api/tenants');
  }
  this.create = (tenant) =>{
    console.log(tenant);
    return $http.post('/api/tenants', tenant)
  }
  this.edit = (tenant) => {
    return $http.put('/api/tenants/' + tenant.tenantId,tenant)
  }
  this.delete = (tenant) => {
    return $http.delete('/api/tenants/' + tenant)
  }
})

app.service('Property', function($http){
  this.getAll = () => {
    return $http.get('/api/propertys')
  }
  this.create = (property) =>{
    console.log(property);
    return $http.post('/api/propertys', property)
  }
  this.delete = (property) => {
    return $http.delete('/api/propertys/' + property)
  }
})
  // this.getAll = () => {
  //   return $http.post('/api/tenant');
  // }
  // this.getAll = () => {
  //   return $http.put('/api/tenant');
  // }
  // this.getAll = () => {
  //   return $http.delete('/api/tenant');
  // }
