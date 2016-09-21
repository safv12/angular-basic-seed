
describe('Error404 module', function () {
  'use strict';

  var scope;
  var Error404Ctrl;

  beforeEach(function () {
    module('App.error404');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      Error404Ctrl = $controller('Error404Ctrl', { $scope: scope });
    });
  });


  it('should Error404Ctrl to be defined', function () {
    expect(Error404Ctrl).toBeDefined();
  });


  it('should errorCode to be 404', function () {
    expect(scope.errorCode).toBe(404);
  });

});
