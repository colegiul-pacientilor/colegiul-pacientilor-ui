(function () {
    'use strict';

    angular
        .module('colegiul-pacientilor.profile.controllers', [])
        .controller('ProfileController', function () {
            var today = new Date();
            this.user =  {
                firstName: 'Cezar',
                lastName: 'Sirbu',
                email: 'cezar.sirbu@db.com',
                gender: 'Male',
                phone: '+40727686706',
                isDoctor: true
            };

        });

})();
