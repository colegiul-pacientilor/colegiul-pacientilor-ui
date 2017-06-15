(function () {
  'use strict';

  angular.module('colegiul-pacientilor.controllers')
    .controller('UsersController', ['$scope', '$http', function ($scope, $http) {
      var today = new Date();
      $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function(gridApi){
          $scope.gridApi = gridApi;
          $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
        },
        columnDefs: [
          {field: 'email'},
          {field: 'name'},
          {field: 'phone'}
        ]
      };

      var data = [
        {
          email: 'cezar.sirbu@db.com',
          name: 'Cezar Sirbu',
          phone: '+40727686706'
        },
        {
          email: 'ionut.pistol@db.com',
          name: 'Ionut Pistol',
          phone: '+40727686707'
        },
        {
          email: 'constantin.aldea@db.com',
          name: 'Constantin Aldea',
          phone: '+40727686709'
        },
        {
          email: 'marian.strugaru@db.com',
          name: 'Marian Strugaru',
          phone: '+40727686710'
        }
      ];

      $scope.gridOptions.data = data;

      $scope.filter = function () {
        $scope.gridApi.grid.refresh();
      };

      $scope.singleFilter = function (renderableRows) {
        var matcher = new RegExp($scope.filterValue);
        renderableRows.forEach(function (row) {
          var match = false;
          ['name', 'email'].forEach(function (field) {
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
