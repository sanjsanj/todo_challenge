toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.itemList = [];
  self.view = 1;

  self.addItem = function(){
    self.itemList.push({'name': self.newItem, 'isCompleted': false});
    self.newItem = '';
  };

  self.clearCompleted = function(){
    self.itemList = self.itemList.filter(function(item){
      return !item.isCompleted;
    });
  };

  self.setView = function(selection){
    self.view = selection;
  };

  self.isView = function(selection){
    return self.view === selection;
  };
}]);
