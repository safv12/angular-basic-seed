(function () {
  'use strict';

  angular.module('App')
    .controller('Error404Controller', Error404Controller);

  Error404Controller.$inject = [];
  function Error404Controller() {
    var vm = this;
    vm.message = 'Error 404 page not found!';
  }

})();


