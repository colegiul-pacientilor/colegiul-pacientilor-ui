(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesShowCtrl', RegistriesShowCtrl);

  RegistriesShowCtrl.$inject = ['RegistryService', '$state'];

  function RegistriesShowCtrl(RegistryService, $state) {
    var self = this;

    self.gridOptions = {
      enableSorting: true
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