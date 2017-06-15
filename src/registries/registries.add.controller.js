(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesAddCtrl', RegistriesAddCtrl);

  function RegistriesAddCtrl() {
    this.message = 'test';


    //
    // name: {type: String},
    // description: {type: String},
    // createdBy: {type: String},
    // creationDate: { type: Date, default: Date.now },
    // status: {type: String, default: "DRAFT" },
    // nbrFields: {type: Number},
    // nbrRecords: {type: Number, default: 0 },
    // fields: { type: Array },
    // records: { type: Array }


    this.registry = {
      name: '',
      description: '',
      status: '',
      administrativeFields: [],
      clinicalFields: []
    };

    this.addAdministrativeField = function() {
      this.registry.administrativeFields.push({
        name: '',
        value: '',
        type: 'text'
      });
    };

    this.addClinicalField = function() {
      this.registry.clinicalFields.push({
        name: '',
        value: '',
        type: 'text',
        length: 0
      });
    };
  }

})();