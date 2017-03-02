angular.module('starter.list', [])

.controller('ListCtrl', function($scope,Items) {
  $scope.items = Items;
    // $scope.items = [];
  $scope.addItem = function() {
    var name = prompt("What do you need to buy?");
    if (name) {
      $scope.items.$add({
        'name': name
      });
    }
  };

  $scope.purchaseItem = function(item) {
    $scope.item = item;
    $scope.item['status'] = 'purchased';
    $ionicListDelegate.closeOptionsButton();
  };
});
