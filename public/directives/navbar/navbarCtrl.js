angular.module('myApp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/navbar/navbar.html',
      scope: {},
      controller: function($scope, $state, mainService) {

                /* Set the width of the side navigation to 250px */
        $scope.openNav = function() {
            document.getElementById("mySidenav").style.width = "600px";
        }

        /* Set the width of the side navigation to 0 */
        $scope.closeNav = function() {
            document.getElementById("mySidenav").style.width = "0";
        }

      }
    };
  }); //end
