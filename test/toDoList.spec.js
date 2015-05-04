describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('initializes with', function(){

    it('an empty ToDo item list', function() {
      expect(ctrl.itemList).toEqual([]);
    });

    it('a total task count of zero', function(){
      expect(ctrl.itemList.length).toEqual(0);
    });

    // it('an active task count of zero', function(){
    //   expect(ctrl.activeTaskCount()).toEqual(0);
    // });
    //
    // it('a completed task count of zero', function(){
    //   expect(ctrl.completedTaskCount()).toEqual(0);
    // });
  });


  describe('When adding items it', function(){

    beforeEach(function(){
      ctrl.newItem = "Buy milk";
      ctrl.addItem();
    });

    it('can display an item', function(){
      expect(ctrl.itemList).toEqual([{'name': 'Buy milk', 'isCompleted': false}]);
    });

    it('knows item is not complete', function(){
      expect(ctrl.itemList[0].isCompleted).toEqual(false);
    });

    it('can display multiple items', function(){
      ctrl.newItem = "Walk dog";
      ctrl.addItem();
      expect(ctrl.itemList).toEqual([{'name': 'Buy milk', 'isCompleted': false}, {'name': 'Walk dog', 'isCompleted': false}]);
    });
//
//     it('can edit an active item', function(){
//       ctrl.editItem("Buy milk", "Drink milk");
//       expect(ctrl.itemList).toContain("Drink milk");
//     });
//
//     it('can delete an active item', function(){
//       ctrl.deleteItem("Buy milk");
//       expect(ctrl.itemList).toEqual([]);
//     });
  });

  describe('After marking an item as complete it', function(){

    beforeEach(function(){
          ctrl.newItem = "Buy milk";
          ctrl.addItem();
      ctrl.toggle("Buy milk");
    });

    it('knows item is no longer active', function(){
      expect(ctrl.itemList).toEqual([]);
    });

//     it('knows item is completed', function(){
//       expect(ctrl.itemList).toContain("Buy milk");
//     });
//
//     it('can edit a completed item', function(){
//       ctrl.editItem("Buy milk", "Drink milk");
//       expect(ctrl.itemList).toContain("Drink milk");
//     });
//
//     it('can delete a completed item', function(){
//       ctrl.deleteItem("Buy milk");
//       expect(ctrl.itemList).toEqual([]);
//     });
//
//     it('can mark it as active again', function(){
//       ctrl.toggle("Buy milk");
//       expect(ctrl.itemList).toContain("Buy milk");
//     });
//
//     it('can be cleared', function(){
//       ctrl.clearCompleted();
//       expect(ctrl.itemList).toEqual([]);
//     });
  });
});
