(function() {
'use strict';

  angular
    .module('App')
    .factory('todoService', todoService);

  todoService.$inject = [];
  function todoService() {

    var items = [
      {
        description: 'Something you need to do',
        isDone: false
      }
    ];

    var service = {
      new: addItem,
      getItems: getItems
    };

    return service;

    ////////////////

    function addItem(item) {
      items.push(item);
      return items;
    }

    function getItems() {
      return items;
    }
  }
})();