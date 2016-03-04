'use strict';

app.controller('PhotoCtrl', function($scope) {

	$scope.takePhoto = function() {
		console.log('takePhoto was clicked');
	}

	$scope.choicePhoto = function() {
		console.log('choicePhoto was clicked');
	}
})