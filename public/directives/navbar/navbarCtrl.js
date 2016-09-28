angular.module('myApp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/navbar/navbar.html',
      scope: {},
      controller: function($scope, $state, mainService) {

        $(".button-collapse").sideNav({
          menuWidth: 600, // Default is 240
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });

        $('.button-collapse').sideNav('hide');


      }
    };
  }); //end
