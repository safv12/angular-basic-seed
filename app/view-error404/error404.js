angular.module('App.error404', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/error404', {
    templateUrl: 'view-error404/error404.html',
    controller: 'Error404Ctrl'
  });
}])

.controller('Error404Ctrl', function ($scope) {
  $scope.errorCode = 404;
});
