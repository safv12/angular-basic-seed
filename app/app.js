angular.module('App', [
  'ngRoute',
  'App.error404'
])

.config(['$routeProvider', function ($routeProvider) {
  'use strict';

  $routeProvider.otherwise({ redirectTo: '/error404' });
}]);
