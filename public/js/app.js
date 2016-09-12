angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl'
    })

    $urlRouterProvider.otherwise('/');

  }); //end
