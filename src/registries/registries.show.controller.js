(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesShowCtrl', RegistriesShowCtrl);

  RegistriesShowCtrl.$inject = ['RegistryService', '$state'];

  function RegistriesShowCtrl(RegistryService, $state) {
    var self = this;

    this.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { field: 'name' },
        { field: 'cnp' }
      ]
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

      self.gridOptions.data = values;
    });
  }

})();