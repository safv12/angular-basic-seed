
describe('Error404 module', function () {

  beforeEach(module('App.error404'));

  it('should Error404Ctrl to be defined', inject(function($controller, $rootScope) {

    scope = $rootScope.$new();
    var Error404Ctrl = $controller('Error404Ctrl', { $scope: scope });

    expect(Error404Ctrl).toBeDefined();
    expect(scope.errorCode).toBe(404);

  }));

});
