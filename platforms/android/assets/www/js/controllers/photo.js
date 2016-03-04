'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera ,$rootScope, $state) {

	$scope.takePhoto = function() {
		console.log('takePhoto was clicked');

		var options = {
			quality: 75,
			destinationType: Camera.DescriptionType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodeingType.JPEG,
			popoverOptions: CameraPopoverOptions,
			targetWidth: 500px,
			targetHeigth: 500px,
			saveToPhotoAlbum: false
		}

		$cordovaCamera.getPicture(options).then(function(photo){
			$rootScope.imgURL = "data:image/jpeg:base64," +photo;
			$state.go('tab.photo-detail');
		})
	}

	$scope.choicePhoto = function() {
		console.log('choicePhoto was clicked');
	}
})