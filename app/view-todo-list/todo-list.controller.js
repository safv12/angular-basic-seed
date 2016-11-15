(function() {
'use strict';

  angular
    .module('App')
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = ['todoService'];
  function TodoListController(todoService) {
    var vm = this;

    vm.items = {};
    vm.save = save;

    activate();

    ////////////////

    function activate() {
      vm.items = todoService.getItems();
    }

    function save(itemDesc) {
      var res = todoService.newItem({
        description: itemDesc,
        isDone: false
      });

      vm.items = res;
      return vm.items;
    }
  }
})();