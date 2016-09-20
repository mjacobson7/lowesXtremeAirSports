angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl'
    })

    .state('attractions', {
      url: '/attractions',
      templateUrl: '../features/attractions/attractions.html',
      controller: 'attractionsCtrl'
    })

    $urlRouterProvider.otherwise('/');

  }); //end
