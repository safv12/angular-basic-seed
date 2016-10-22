(function() {
'use strict';

  angular
    .module('App')
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = ['todoService'];
  function TodoListController(todoService) {
    var vm = this;

    vm.items = {};

    activate();

    ////////////////

    function activate() {
      vm.items = todoService.getItems();
    }
  }
})();