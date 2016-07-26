'use strict';

app.factory('Auth', function ($q, NIFTY_APPKEY, NIFTY_CLIENTKEY, $state) {
  var ncmb = new NCMB(NIFTY_APPKEY, NIFTY_CLIENTKEY);
  var q = $q.defer();

  var Auth = {
    user: {},

    login: function (userForm) {
      console.log('we got to login function');
      ncmb.User.login(userForm.name, userForm.password)
        .then(function (user) {
          q.resolve(user);
        })
        .catch(function (error) {
          q.reject(error);
        });
      return q.promise;
    },
    register: function (userForm) {
      console.log('in the register', userForm);
      var user = new ncmb.User();
      user.set("userName", userForm.name).set("password", userForm.password);

      user.signUpByAccount()
        .then(function (user) {
          console.log('user is saving');
          q.resolve(user);
        })
        .catch(function (error) {
          q.reject(error);
        });
      return q.promise;
    },
    logout: function () {
      console.log('user was logout');
      ncmb.User.logout();
    }
  }

  if (ncmb.User.getCurrentUser()) {
    Auth.user = ncmb.User.getCurrentUser();
    console.log('the user has already logged in');

    $state.go('tab.dash');
  } else {
    $state.go('login');
  }

  return Auth;
});
