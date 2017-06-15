(function(){
  'use strict';

  angular.module('colegiul-pacientilor.controllers')
    .controller('accountsCoursesLessonsController', [
      '$scope',
      'cfpLoadingBar',
      '$timeout',
      function($scope, cfpLoadingBar, $timeout) {
        $scope.dataIsLoaded = false;

        $scope.newComment = {};
        $scope.attendance = null;

        $scope.addAttendance = function() {
          $scope.lesson.userAttendance = 1;
        };

        $scope.addComment = function() {
          $scope.newComment.gravatar = '00000000000000000000000000000000';
          $scope.newComment.fullName = 'John Branch';
          $scope.newComment.date     = new Date().getTime();

          $scope.lesson.comments.push($scope.newComment);

          $scope.newComment = {};
        };

        $scope.lesson = {
          id: 1,
          title: 'Curs 1',
          attended: 20,
          userAttendance: 0,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet saepe in qui adipisci, optio aliquam culpa, excepturi repellendus, id numquam delectus magnam sequi non ratione. Minus unde ab assumenda, beatae minima eaque expedita at tempora voluptatem quisquam. Commodi ratione quia tempora nobis debitis, minus voluptatum voluptates dolorum assumenda aliquid, ipsam.\n' +
                       '* Element 1\n' +
                       '* Element 2\n' +
                       '```bash\n' +
                       ''+
                       '$ ls && pwd \n'+
                       ':+1: \n'+
                       '```' +
                       '\n'+
                       '### HTML Hello world example\n'+
                       '```html\n'+
                       '<!DOCTYPE html>\n'+
                       '<html> \n' +
                       '  <head> \n'+
                       '    <title>Hello world!</title> \n'+
                       '  </head> \n'+
                       '  <body> \n'+
                       '    <h1>Hello world!</h1> \n'+
                       '  </body> \n'+
                       '</html> \n'+
                       '```\n',
          comments: [
            {
              gravatar: '00000000000000000000000000000000',
              fullName: 'John Branch',
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, deleniti. Minima, enim blanditiis, repudiandae quam quaerat expedita vitae saepe dignissimos.',
              date: 1465751990000
            }
          ]
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
