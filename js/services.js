angular.module('tinata.services', [])

.factory('Country', ["$http", function($http) {
  var baseurl = 'http://tinatapi.iaincollins.com/countries/';

  return {
    all: function(scope) {
      $http.get(baseurl)
      .success(function(data) {
        scope.countries = data;
      })
      .error(function(data, status) {
        console.log('GET ' + baseurl + ' failed:', data, status);
      });
    },
    get: function(id, scope) {
      $http.get(baseurl + id)
      .success(function(data) {
        scope.country = data[0];
      })
      .error(function(data, status) {
        console.log('GET ' + baseurl + id + ' failed:', data, status);
      });
    }
  }
}]);
