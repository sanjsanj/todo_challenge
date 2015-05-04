toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.itemList = [];

  self.addItem = function(){
    self.itemList.push({'name': self.newItem, 'isCompleted': false});
    self.newItem = '';
  };

  self.clearCompleted = function(){
    self.itemList = self.itemList.filter(function(item){
      return !item.isCompleted;
    });
  };


}]);
