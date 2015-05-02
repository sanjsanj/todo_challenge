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

    it('a total task count of zero', function(){
      expect(ctrl.totalTaskCount()).toEqual(0);
    });

    it('an active task count of zero', function(){
      expect(ctrl.activeTaskCount()).toEqual(0);
    });

    it('a completed task count of zero', function(){
      expect(ctrl.completedTaskCount()).toEqual(0);
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

    it('can edit an active item', function(){
      ctrl.editItem("Buy milk", "Buy more milk");
      expect(ctrl.listActive).toContain("Buy more milk");
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

    it('can edit a completed item', function(){
      ctrl.editItem("Buy milk", "Buy more milk");
      expect(ctrl.listCompleted).toContain("Buy more milk");
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
