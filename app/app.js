angular.module('App', [
  'ngRoute',
  'App.error404'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/error404' });
}]);
