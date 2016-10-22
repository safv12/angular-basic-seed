(function () {
  'use strict';

  angular
    .module('App', ['ngRoute'])
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider
      .when('/error404', {
        templateUrl: 'view-error404/error404.html',
        controller: 'Error404Ctrl'
      })
      .otherwise({ redirectTo: '/error404' });
  }

})();

