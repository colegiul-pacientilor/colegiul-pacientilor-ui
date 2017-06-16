(function(){
  'use strict';

  angular.module('colegiul-pacientilor.controllers', []);
  angular.module('colegiul-pacientilor.registries.controller', []);

  angular.module('colegiul-pacientilor.ui', [
    'ui.router',
    'colegiul-pacientilor.controllers',
    'colegiul-pacientilor-ui.templateCache',
    'angular-loading-bar',
    'ui.bootstrap',
    'ng-showdown',
    'colegiul-pacientilor.registries.controller',
    'colegiul-pacientilor.profile.controllers',
    'colegiul-pacientilor.registries.list.controller',
    'colegiul-pacientilor.registries.upload.controller',
    'angularFileUpload',
    'ui.grid'
  ]);

  angular.element(document).ready(function() {
    angular.element(document.body).prepend('<div ui-view></div>');
    angular.bootstrap(document, ['colegiul-pacientilor.ui']);
  });

})();
