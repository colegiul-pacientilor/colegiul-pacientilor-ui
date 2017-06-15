(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.list.controller', ['colegiul-pacientilor.registries.services'])
    .controller('RegistriesListCtrl', ['$scope', 'RegistryService', function ($scope, RegistryService) {
      var today = new Date();

      $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
          $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
        },
        columnDefs: [
          {field: 'name'},
          {field: 'status'},
          {field: 'nbrRecords', name: 'Cases'},
          {
            field: '',
            cellTemplate: '<button>View</button><button>Edit</button>'
          }
        ]
      };

      RegistryService.all().then(function (data) {
        console.log(data.data);
        $scope.gridOptions.data = data.data;
      });


      $scope.filter = function () {
        $scope.gridApi.grid.refresh();
      };

      $scope.singleFilter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
          var match = false;
          ['name', 'status'].forEach(function (field) {
            if (row.entity[field].match(matcher)) {
              match = true;
            }
          });
          if (!match) {
            row.visible = false;
          }
        });
        return renderableRows;
      };
    }]);

})();