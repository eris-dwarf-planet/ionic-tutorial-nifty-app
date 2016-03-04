'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth) {
    $scope.emailLogin = function() {
        console.log('button was cliced on login');

        // Triggered on a button click, or some other target

        $scope.user = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/partials/login.html',
            title: 'Signin',
            scope: $scope,
            buttons: [{
                text: '<b>Login</b>',
                type: 'button-energized',
                onTap: function(user) {
                    user = $scope.user;
                    Auth.login(user).then(function() {
                        console.log('user was authenticated successfully');
                        $state.go('tab.dash');
                    }, function(err) {
                        console.log('Error...', err);
                    });
                    console.log('login finish.');
                }
            }, {
                text: '<b>Register</b>',
                type: 'button-clam',
                onTap: function(user) {
                    user = $scope.user;
                    // register the user
                    Auth.register(user).then(function() {
                        console.log('user was registered successfully');
                        $state.go('tab.dash');
                    }, function(err) {
                        console.log('Error...', err);
                    });
                    console.log('register finish.');
                }
            }]
        });
    }
});
