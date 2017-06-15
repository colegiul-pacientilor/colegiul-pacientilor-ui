angular
    .module('colegiul-pacientilor.registries.factory', [])
    .factory('RegistriesFactory', RegistriesFactory);

RegistriesFactory.$inject = ['$http'];

function RegistriesFactory($http) {
    var service = {
        getOpenRegistries: getOpenRegistries,
        getRegistries: getRegistries
    };
    return service;

    // Implementations

    function getOpenRegistries() {
        // var config = {
        //     method: "get",
        //     url: "registries.json"
        // };

        // return $http(config);
    }

    function getRegistries() {
    }
}