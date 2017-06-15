( function () {
    'use strict';
    
angular
    .module('colegiul-pacientilor.registries.list.controller', [])
    .controller('RegistriesListCtrl', ['$scope', '$http', function ($scope, $http) {
        var today = new Date();
        $scope.gridOptions = {
            enableFiltering: false,
            onRegisterApi: function(gridApi){
                $scope.gridApi = gridApi;
                $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
            },
            columnDefs: [
                {field: 'name'},
                {field: 'status'},
                {field: 'cases'}
            ]
        };

        var data = [
            {

                name: 'Alzheimer\'s Prevention Registry',
                status: 'Open',
                cases: '3000'
            },
            {
                name: 'Breast Cancer Family Registry',
                status: 'Draft',
                cases: '0'
            },
            {
                name: 'Registry 3',
                status: 'Open',
                cases: '25'
            },
            {
                name: 'ZZ Registry',
                status: 'Closed',
                cases: '7800'
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