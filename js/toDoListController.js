toDoList.controller('ToDoListController', [function(){
  this.listActive = [];
  this.listCompleted = [];

  var self = this;

  self.addItem = function(item){
    self.listActive.push(item);
  };

  self.deleteItem = function(item){

    function isItemActive(){
      return self.listActive.indexOf(item) >= 0;
    };

    if (isItemActive()) {
      self.listActive.splice(item, 1);
    } else {
      self.listCompleted.splice(item, 1);
    };
  };

  self.toggle = function(item){

    function isItemActive(){
      return self.listActive.indexOf(item) >= 0;
    };

    if (isItemActive()){
      self.listCompleted.push(item);
      self.listActive.splice(item, 1);
    } else {
      self.listActive.push(item);
      self.listCompleted.splice(item, 1);
    };
  };

  self.editItem = function(item, newItem){

    function isItemActive(){
      return self.listActive.indexOf(item) >= 0;
    };

    if (isItemActive()){
      var index = self.listActive.indexOf(item);
      self.listActive[index] = newItem;
    } else {
      var index = self.listCompleted.indexOf(item);
      self.listCompleted[index] = newItem;
    };
  };
}]);
