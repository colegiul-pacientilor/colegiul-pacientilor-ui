(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.list.controller', ['colegiul-pacientilor.registries.services'])
    .controller('RegistriesCaseCtrl1', ['$scope', 'RegistryService','$stateParams',
      function ($scope, RegistryService, $stateParams) {
        var displayStatus = 'OPEN';
        
        $scope.search = 'ddddd';

    }]);
})();

