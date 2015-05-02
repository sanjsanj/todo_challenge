describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty active list', function() {
    expect(ctrl.listActive).toEqual([]);
  });

  it('initialises with an empty completed list', function() {
    expect(ctrl.listCompleted).toEqual([]);
  });

  describe('When adding items', function(){

    it('it knows item is active', function(){
      ctrl.addItem("Buy milk");
      expect(ctrl.listActive).toContain("Buy milk");
    });

    it('it can display 1 item', function(){
      ctrl.addItem("Buy milk");
      expect(ctrl.listActive).toEqual(["Buy milk"]);
    });

    it('it can display multiple items', function(){
      ctrl.addItem("Buy milk");
      ctrl.addItem("Walk dog");
      expect(ctrl.listActive).toEqual(["Buy milk", "Walk dog"]);
    });

    xit('it can edit an active item', function(){

    });

    it('it can delete an active item', function(){
      ctrl.addItem("Buy milk");
      ctrl.deleteItem("Buy milk");
      expect(ctrl.listActive).toEqual([]);
    });

    xit('it can mark an item as completed', function(){

    });

    xit('it can edit a completed item', function(){

    });

    xit('it can delete a completed item', function(){
      ctrl.addItem("Buy milk");
      ctrl.deleteItem("Buy milk");
      expect(ctrl.listActive).toEqual([]);
    });
  });

});
