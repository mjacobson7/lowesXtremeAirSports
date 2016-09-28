angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '../features/home/home.html',
      controller: 'homeCtrl'
    })

    .state('activities', {
      url: '/activities',
      templateUrl: '../features/activities/activities.html',
      controller: 'activitiesCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: '../features/contact/contact.html',
      controller: 'contactCtrl'
    })

    .state('parties', {
      url: '/parties',
      templateUrl: '../features/parties/parties.html',
      controller: 'partiesCtrl'
    })

    .state('pricing', {
      url: '/pricing',
      templateUrl: '../features/pricing/pricing.html',
      controller: 'pricingCtrl'
    })

    .state('waiver', {
      url: '/waiver',
      templateUrl: '../features/waiver/waiver.html',
      controller: 'waiverCtrl'
    })

    $urlRouterProvider.otherwise('/');

  }); //end
