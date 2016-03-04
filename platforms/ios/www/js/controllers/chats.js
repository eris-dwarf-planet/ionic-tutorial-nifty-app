'use strict';

app.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.image = "http://localhost:8100/img/sample01.jpg";
  $scope.button = function (product) {    
    console.log("button was cliced", product, $scope.image);
    Products.saveProduct(product, $scope.image);
  }
})