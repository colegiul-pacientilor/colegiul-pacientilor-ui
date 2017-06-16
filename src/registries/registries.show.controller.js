(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesShowCtrl', RegistriesShowCtrl);

  RegistriesShowCtrl.$inject = ['RegistryService', '$state', '$http'];

  function RegistriesShowCtrl(RegistryService, $state, $http    ) {
    var self = this;

    self.gridOptions = {
      enableSorting: true
    };


      self.caseSubmit = function() {
        var data  = { name: 'meaningless name'};

          data.values = self.registry.fields.map( function (p) {
              return { name: p.name, value: p.value };
          });

        console.log( JSON.stringify( data ) );

          $http({
              method: 'POST',
              url: 'http://localhost:3001/' + self.registry._id + "/records",
              data: data,
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function successCallback(response) {
              console.log(response);

              $state.go('index.home');
          }, function errorCallback(response) {
                console.log(response);
          });
      };

    RegistryService.findById($state.params.id).then(function(response) {
      self.registry = response.data;

      var values = [];

      response.data.records.forEach(function(r) {
        var object = {};
        r.values.forEach(function(item) {
          for (var name in item) {
            if (name == 'name') {
              object[item.name.toString().toLowerCase()] = item.value;
            }
          }
        });
        values.push(object);
      });

      console.log(values);

      var keys = [];

      values.forEach(function(item) {
        keys = Object.keys(item);
      });

      var columnDefs = [];
      keys.forEach(function(key) {
        columnDefs.push({field: key});
      });

      self.gridOptions = {
        columnDefs: columnDefs
      };

      self.gridOptions.data = values;
    });
  }

})();