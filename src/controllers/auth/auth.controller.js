(function () {
  'use strict';

  angular.module('colegiul-pacientilor.controllers')
    .controller('AuthController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
      $scope.user = {
        email: null,
        phone: null
      };

      $scope.doRegister = function() {
        $http({
          method: 'POST',
          url: 'http://localhost:3001/login',
          data: {
            'sms': {
              'recipient': $scope.user.phone,
              'message': $scope.user.email + ", welcome to Colegiul Pacientilor!",
              'id': 1
            }
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function successCallback(response) {
          $state.go('index.home');
        }, function errorCallback(response) {

        });
      };

    }]);

})();
