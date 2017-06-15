(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.list.controller', ['colegiul-pacientilor.registries.services'])
    .controller('RegistriesListCtrl', ['$scope', 'RegistryService', '$state', 
      function ($scope, RegistryService, $state) {
        $scope.search = '';
  
        $scope.propertyName = null;
        $scope.reverse = true;

        $scope.sortBy = function(propertyName) {
          console.log(propertyName);
          $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
          $scope.propertyName = propertyName;
        };

        RegistryService.all().then(function (response) {
          $scope.registries = response.data;
        });
    }]);

})();