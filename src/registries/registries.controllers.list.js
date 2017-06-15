(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.list.controller', ['colegiul-pacientilor.registries.services'])
    .controller('RegistriesListCtrl', ['$scope', 'RegistryService', '$state', 
      function ($scope, RegistryService, $state) {
        var displayStatus = 'OPEN';
        
        $scope.search = '';
  
        $scope.propertyName = null;
        $scope.reverse = true;

        $scope.openRegistries = [];

        $scope.sortBy = function(propertyName) {
          $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
          $scope.propertyName = propertyName;
        };

        RegistryService.all().then(function (response) {
          $scope.registries = response.data;
        });

        RegistryService.all().then(function (response) {
          $scope.registries = response.data;
          
          $scope.openRegistries = response.data.filter(function(item) { 
            return item.status == displayStatus;
          });
        });
    }]);

})();