'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera ,$rootScope, $state) {

    var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 500,
        targetHeight: 500,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

	$scope.takePhoto = function() {
	    console.log('takePhoto was clicked');

	    options.sourceType = Camera.PictureSourceType.CAMERA;

	    $cordovaCamera.getPicture(options).then(function(photo) {
	        $rootScope.imgURL = "data:image/jpeg;base64," + photo;
	        $state.go('tab.photo-detail');
	    })
	}

	$scope.choicePhoto = function() {
		console.log('choicePhoto was clicked');

	    options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

	    $cordovaCamera.getPicture(options).then(function(photo) {
	        $rootScope.imgURL = "data:image/jpeg;base64," + photo;
	        $state.go('tab.photo-detail');
	    })
	}
})