angular.module('myApp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/navbar/navbar.html',
      scope: {},
      controller: function($scope, $state, mainService) {



      }
    };
  }); //end
