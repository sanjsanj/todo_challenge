describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.listDisplay).toBeUndefined();
  });

  describe('When adding an item', function(){
    var items = [
      {
        "item": "Get milk"
      }
    ];

    it('displays the item', function(){
      expect(ctrl.listDisplay.items).toEqual(items);
    });
  });

});
