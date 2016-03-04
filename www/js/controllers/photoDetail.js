'use strict';

app.controller('PhotoDetailCtrl', function($scope, $state, Products, $rootScope) {
  $scope.imgURL = $rootScope.imgURL;

  $scope.button = function (product) {
    console.log("button was cliced", product, $scope.imgURL);
    Products.saveProduct(product, $scope.imgURL).then(function(){
    	$state.go('tab.dash');
    });
  }
});
