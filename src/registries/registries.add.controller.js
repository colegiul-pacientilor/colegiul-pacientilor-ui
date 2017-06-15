(function () {
  'use strict';

  angular
    .module('colegiul-pacientilor.registries.controller')
    .controller('RegistriesAddCtrl', RegistriesAddCtrl);

  RegistriesAddCtrl.$inject = ['$http', '$state'];

  function RegistriesAddCtrl($http, $state) {
    var self = this;

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

    this.submit = function() {
      $http({
        method: 'POST',
        url: 'http://localhost:3001/registries',
        data: self.registry,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function successCallback(response) {
        console.log(response);

        $state.go('index.home');
      }, function errorCallback(response) {

      });
    };
  }

})();