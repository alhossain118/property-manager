'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {

});

app.controller('tenantCtrl', function($scope,$state,Tenant,$stateParams){
  // console.log("swapiCtrl!!");
  // $scope.something = 'blue'
  console.log('tenantCtrl');
  console.log("state",$state);
  console.log("stateParams",$stateParams);
  ////////////////////////GET
  Tenant.getAll()
    .then(res => {
      console.log(res.data);
      $scope.tenantsArray = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  ////////////////////////GET

  ////////////////////////POST
    $scope.submitTenant = function() {
      console.log('sumbitted');
      // let newTenant = angular.copy($scope.tenant)
      let newTenant = angular.copy($scope.tenant)
      console.log(newTenant);
      Tenant.create(newTenant)
      .then(res =>{
        console.log(res);
        $scope.tenantsArray.push(res.data)
      })
    }
    ////////////////////////POST
    ////////////////////////EDIT
    $scope.boolCheck = true;
    $scope.editTenant = function (tenant,index){
        $scope.boolCheck = false;
        console.log(tenant)
      $scope.editTenantObject = {
        index: tenant.$index,
        tenantId: tenant._id,
          name: tenant.name,
          number: tenant.number,
          email: tenant.email
        }

        $scope.submitTenantEdit = function(){
          Tenant.edit($scope.editTenantObject)
          .then(res =>{
            $scope.tenantsArray.splice(index,1, res.data);
            $scope.boolCheck = true;
          })
        }
    }
    ////////////////////////EDIT
    ////////////////////////DELETE
    $scope.removeTenant = function (tenant,index){
      console.log(tenant);
      Tenant.delete(tenant)
        .then($scope.tenantsArray.splice(index,1)
      )}
    ////////////////////////DELETE
  // $scope.clickButton = function(){
  //   $state.go('home')
  // }
})

app.controller('propertyCtrl', function($scope,Property){
  console.log("propertyCtrl");

  Property.getAll()
    .then(res => {
      $scope.propertyArray = res.data;
    })

  $scope.submitProperty = function() {
    let newProperty = angular.copy($scope.property);
    console.log(newProperty);
    Property.create(newProperty)
      .then(res => {
        console.log('create');
        $scope.propertyArray.push(res.data)
      })
  }

  $scope.boolCheck = true;
  // $scope.editProperty = (property, index) => {
  //
  //   $scope.editPropertyObject = {
  //     index:
  //   }
  // }


  $scope.removeProperty = (id, index) => {
    Property.delete(id)
      .then(res => {
        $scope.propertyArray.splice(index,1)
      })
  }

})
