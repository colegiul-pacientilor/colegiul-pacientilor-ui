(function(){
  'use strict';

  angular.module('colegiul-pacientilor.controllers')
    .controller('accountsCoursesHomeworksController', [
      '$scope',
      'cfpLoadingBar',
      '$timeout',
      function($scope, cfpLoadingBar, $timeout) {
        $scope.dataIsLoaded = false;

        $scope.homework = {
          id: 1,
          title: 'Homework 1',
          description: 'Lorem ipsum dolor sit amet.'
        };

        $scope.start = function() {
          cfpLoadingBar.start();
        };

        $scope.complete = function () {
          cfpLoadingBar.complete();
        };

        $scope.start();
        $timeout(function() {
          $scope.dataIsLoaded = true;
          $scope.complete();
        }, 1000);
      }
    ]);

})();
