(function(){
  'use strict';

  angular.module('colegiul-pacientilor.ui')
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
    }]);

})();
