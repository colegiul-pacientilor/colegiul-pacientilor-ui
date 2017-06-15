angular
    .module('colegiul-pacientilor.registries.controller', [])
    .controller('RegistriesCtrl', RegistriesCtrl);

RegistriesFactory.$inject = ['RegistriesFactory'];    
    
function RegistriesCtrl(RegistriesFactory) {
        this.sample = "test";

        // RegistriesFactory.getOpenRegistries()
        //     .then(function(data) {
        //         console.log('Dude! Here is data');
        //     })
        //     .catch(function(error) {
        //         console.log('Dude! There are some errors');
        //     });
        // this.registries = [
        //     {
        //         id: 1,
        //         name: 'Alzheimer\'s Prevention Registry',
        //         active: true
        //     },
        //     {
        //         id: 2,
        //         name: 'Breast Cancer Registry',
        //         active: true
        //     },
        //     {
        //         id: 3,
        //         name: 'Colon Prevention Registry',
        //         active: false
        //     },          
        //     {
        //         id: 4,
        //         name: 'The Down Syndrome Registry',
        //         active: true
        //     }
        // ];
}