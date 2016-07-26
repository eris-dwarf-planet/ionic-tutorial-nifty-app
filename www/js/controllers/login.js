'use strict';

app.controller('LoginCtrl', function ($scope, $state, $ionicPopup, Auth) {
    console.log('login ctrl init.');

    $scope.emailLogin = function () {
        console.log('button was cliced on login');

        // Triggered on a button click, or some other target

        $scope.user = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/partials/login.html',
            title: 'Sign In',
            scope: $scope,
            buttons: [{
                text: '<b>Login</b>',
                type: 'button-energized',
                onTap: function (user) {
                    user = $scope.user;
                    Auth.login(user).then(function (profile) {
                        console.log('user was authenticated successfully');
                        console.log(profile);

                        $state.go('tab.dash');
                    }).catch(function (err) {
                        console.log('Error...', err);
                    });
                    console.log('login finish.');
                }
            }, {
                    text: '<b>Register</b>',
                    type: 'button-clam',
                    onTap: function (user) {
                        user = $scope.user;
                        // register the user
                        Auth.register(user).then(function (profile) {
                            console.log('user was registered successfully');
                            console.log(profile);

                            $state.go('tab.dash');
                        }).catch(function (err) {
                            console.log('Error...', err);
                        });
                        console.log('register finish.');
                    }
                }]
        });
    }
});
