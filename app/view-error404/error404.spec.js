var should = require('should');

describe('Error404 module', function () {

  it('Should have errorCode property', function () {
    module('App.error404');
    inject(function ($injector) {
      Error404Ctrl = $injector.get('Error404Ctrl');
    });

    console.log(Error404Ctrl);
  });

});
