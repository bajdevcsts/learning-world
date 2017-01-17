"use strict"
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',['$scope',function($scope) {
  console.log('Hello');

  $scope.message = 'Hello';

  $scope.sayHello = function(name) {
    return $scope.message + " " + name;
  };
}]);
