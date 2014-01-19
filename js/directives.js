angular.module('tinata.directives', [])

.directive('lgbt', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {rights: '='},
    templateUrl: 'directives/lgbt.html'
  };
});
