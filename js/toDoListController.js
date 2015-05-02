toDoList.controller('ToDoListController', [function(){
  var self = this;
  self.listActive = [];

  self.addItem = function(item){
    self.listActive.push(item);
  };

}]);
