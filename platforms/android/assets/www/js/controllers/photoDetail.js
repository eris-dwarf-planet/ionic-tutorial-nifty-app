'use strict';

app.controller('PhotoDetailCtrl', function($scope, Products, $rootScope) {
  $scope.imgURL = $rootScope.imgURL;

  $scope.image = "http://localhost:8100/img/sample01.jpg";
  $scope.button = function (product) {    
    console.log("button was cliced", product, $scope.imgURL);
    Products.saveProduct(product, $scope.imgURL);
  }
})