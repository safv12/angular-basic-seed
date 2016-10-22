(function () {
  'use strict';

  angular
    .module('App', ['ngRoute'])
    .config(['$routeProvider', config]);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view-todo-list/todo-list.html',
        controller: 'TodoListController',
        controllerAs: 'todoList'
      })
      .when('/error404', {
        templateUrl: 'view-error404/error404.html',
        controller: 'Error404Controller',
        controllerAs: 'error404'
      })

      .otherwise({ redirectTo: '/error404' });
  }

})();

