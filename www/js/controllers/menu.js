'use strict';

app.controller('MenuCtrl', function($scope, $state, Auth) {
    console.log('menu ctrl init.');

  $scope.logout = function() {
  	Auth.logout();
  };

  $scope.accountSetting = function() {
    console.log('user was account setting.');
	$state.go('tab.account');
  };

});
