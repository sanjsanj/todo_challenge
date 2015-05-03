toDoList.controller('ToDoListController', [function(){
  this.listActive = [];
  this.listCompleted = [];

  var self = this;

  self.addItem = function(item){
    self.listActive.push(item);
  };

  self.isItemActive = function(item){
    return self.listActive.indexOf(item) >= 0;
  };

  self.deleteItem = function(item){

    if (self.isItemActive(item)) {
      self.listActive.splice(item, 1);
    } else {
      self.listCompleted.splice(item, 1);
    }
  };

  self.toggle = function(item){

    if (self.isItemActive(item)) {
      self.listCompleted.push(item);
      self.listActive.splice(item, 1);
    } else {
      self.listActive.push(item);
      self.listCompleted.splice(item, 1);
    }
  };

  self.editItem = function(item, newItem){

    if (self.isItemActive(item)) {
      var indexActive = self.listActive.indexOf(item);
      self.listActive[indexActive] = newItem;
    } else {
      var indexCompleted = self.listCompleted.indexOf(item);
      self.listCompleted[indexCompleted] = newItem;
    }
  };

  self.totalTaskCount = function(){
    return self.listActive.length + self.listCompleted.length;
  };

  self.activeTaskCount = function(){
    return self.listActive.length;
  };

  self.completedTaskCount = function(){
    return self.listCompleted.length;
  };

  self.clearCompleted = function(){
    self.listCompleted = [];
  };
}]);
