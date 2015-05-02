toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.listActive = [];
  self.listCompleted = [];

  self.addItem = function(item){
    self.listActive.push(item);
  };

  self.deleteItem = function(item){
    if (self.listActive.indexOf(item) >= 0) {
      self.listActive.splice(item, 1);
    } else {
      self.listCompleted.splice(item, 1);
    };
  };

  self.toggle = function(item){
    if (self.listCompleted.indexOf(item) === -1){
      self.listCompleted.push(item);
      self.listActive.splice(item, 1);
    } else {
      self.listActive.push(item);
      self.listCompleted.splice(item, 1);
    };
  };
}]);
