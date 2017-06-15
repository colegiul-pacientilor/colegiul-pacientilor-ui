angular
  .module('colegiul-pacientilor.registries.services', [])
  .service('RegistryService', RegistryService);

RegistryService.$inject = ['$http'];

function RegistryService($http) {
  var api = 'http://localhost:3001/',
    service = {
      all: all
    };

  return service;

  function all() {
    var config = {
      method: 'GET',
      url: api + 'registries'
    };

    return $http(config);
  }
}