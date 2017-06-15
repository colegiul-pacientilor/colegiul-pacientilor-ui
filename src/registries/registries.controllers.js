angular
    .module('colegiul-pacientilor.registries.controller', [])
    .controller('RegistriesCtrl', function() {
        this.sample = "test";
        this.registries = [
            {
                id: 1,
                name: 'Alzheimer\'s Prevention Registry'
            },
            {
                id: 2,
                name: 'Breast Cancer Registry'
            },
            {
                id: 3,
                name: 'Colon Prevention Registry'
            }
        ];
    });