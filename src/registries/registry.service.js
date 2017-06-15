angular
  .module('colegiul-pacientilor.registries.services', [])
  .service('RegistryService', RegistryService);

RegistryService.$inject = ['$http'];

function RegistryService($http) {
  var api = 'http://localhost:3001/',
    service = {
      all: all,
      open: getOpen,
      findById: findById
    };

  return service;

  function all() {
    var config = {
      method: 'GET',
      url: api + 'registries'
    };

    return $http(config);
  }

  function getOpen() {
    var config = {
      method: 'GET',
      url: api + 'registries'
    };

    return $http(config);
  }

  function findById(id) {
    var config = {
      method: 'GET',
      url: api + 'registries/' + id
    };

    return $http(config);
  }
}