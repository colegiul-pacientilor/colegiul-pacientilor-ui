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

 /*
      {
        name: 'Nume',
        value: 'Cezar'
      },
      {
        name: 'CNP',
        value: '123'
      }





      {
        nume: 'Cezar',
        cnp: '123'
      }
   */

      var values = [];

      console.log(response.data.records);


      self.gridOptions.data = response.data.records[0].values;
    });
  }

})();