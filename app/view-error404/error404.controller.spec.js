
describe('Error404 module', function () {
  'use strict';

  var Error404Ctrl;

  beforeEach(module('App'));

  beforeEach(function () {
    inject(function($controller) {
      Error404Ctrl = $controller('Error404Ctrl');
    });
  });

  ////////////////////////

  it('should Error404Ctrl to be defined', function () {
    expect(Error404Ctrl).toBeDefined();
  });


  it('should errorCode to be 404', function () {
    expect(Error404Ctrl.message).toBe('Error 404 page not found!');
  });

});
