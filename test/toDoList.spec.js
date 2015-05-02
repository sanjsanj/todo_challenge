describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.listActive).toEqual([]);
  });

  describe('When adding items', function(){
    var items = ["Get milk", "Wash car"];

    it('it can display 1 item', function(){
      ctrl.addItem("Get milk");
      expect(ctrl.listActive).toEqual(["Get milk"]);
    });

    it('it can display multiple items', function(){
      ctrl.addItem("Get milk");
      ctrl.addItem("Wash car");
      expect(ctrl.listActive).toEqual(["Get milk", "Wash car"]);
    });
  });

});
