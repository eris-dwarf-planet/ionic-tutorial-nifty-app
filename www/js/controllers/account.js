'use strict';

app.controller('AccountCtrl', function($scope, $state, Auth) {

  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function() {
  	Auth.logout();
  };

  $scope.accountSetting = function() {
    console.log('user was account setting.');
	$state.go('tab.account');
  };

});
