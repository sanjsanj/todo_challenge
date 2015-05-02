describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('initializes with', function(){

    it('an empty active list', function() {
      expect(ctrl.listActive).toEqual([]);
    });

    it('an empty completed list', function() {
      expect(ctrl.listCompleted).toEqual([]);
    });
  });


  describe('When adding items it', function(){

    beforeEach(function(){
      ctrl.addItem("Buy milk");
    });

    it('knows item is active', function(){
      expect(ctrl.listActive).toContain("Buy milk");
    });

    it('can display an item', function(){
      expect(ctrl.listActive).toEqual(["Buy milk"]);
    });

    it('can display multiple items', function(){
      ctrl.addItem("Walk dog");
      expect(ctrl.listActive).toEqual(["Buy milk", "Walk dog"]);
    });

    xit('can edit an active item', function(){

    });

    it('can delete an active item', function(){
      ctrl.deleteItem("Buy milk");
      expect(ctrl.listActive).toEqual([]);
    });
  });

  describe('After marking an item as complete it', function(){

    beforeEach(function(){
      ctrl.addItem("Buy milk");
      ctrl.toggle("Buy milk");
    });

    it('knows item is no longer active', function(){
      expect(ctrl.listActive).toEqual([]);
    });

    it('knows item is completed', function(){
      expect(ctrl.listCompleted).toContain("Buy milk");
    });

    xit('can edit a completed item', function(){

    });

    it('can delete a completed item', function(){
      ctrl.deleteItem("Buy milk");
      expect(ctrl.listCompleted).toEqual([]);
    });

    it('can mark it as active again', function(){
      ctrl.toggle("Buy milk");
      expect(ctrl.listActive).toContain("Buy milk");
    });
  });
});
