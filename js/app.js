// Ionic tinata App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'tinata' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'tinata.services' is found in services.js
// 'tinata.controllers' is found in controllers.js
angular.module('tinata', ['ionic', 'tinata.services', 'tinata.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    // the countries tab has its own child nav-view and history
    .state('tab.countries', {
      url: '/countries',
      views: {
        'destinations': {
          templateUrl: 'templates/countries.html',
          controller: 'CountriesCtrl'
        }
      }
    })

    .state('tab.country', {
      url: '/countries/:id',
      views: {
        'destinations': {
          templateUrl: 'templates/country.html',
          controller: 'CountryDetailCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

