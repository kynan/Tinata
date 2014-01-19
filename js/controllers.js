angular.module('tinata.controllers', [])

// A simple controller that fetches a list of data from a service
.controller('CountriesCtrl', function($scope, Country) {
  Country.all($scope);
})

// A simple controller that fetches a list of data from a service
.controller('CountryDetailCtrl', function($scope, $stateParams, Country) {
  Country.get($stateParams.id, $scope);
})
