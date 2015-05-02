toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.listActive = [];
  self.listCompleted = [];

  self.addItem = function(item){
    self.listActive.push(item);
  };

  self.deleteItem = function(item){
    if (self.listActive.includes(item)) {
      var index = self.listActive.indexOf(item)
      self.listActive.splice(index, 1);
    } else {
      var index = self.listCompleted.indexOf(item);
      self.listCompleted.splice(index, 1);
    };
  };
}]);
