(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesAddCtrl', RegistriesAddCtrl);

  function RegistriesAddCtrl() {

    this.registry = {
      name: '',
      description: '',
      status: '',
      fields: []
    };

    this.addField = function(type) {
      this.registry.fields.push({
        name: '',
        value: '',
        type: 'text',
        length: 255,
        regType: type
      });

      console.log(this.registry.fields);
    };
  }

})();