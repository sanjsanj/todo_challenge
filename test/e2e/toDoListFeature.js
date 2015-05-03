describe('ToDoList', function() {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  describe('When initialized', function(){

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('has an input form', function() {
      expect(browser.isElementPresent(by.model('newItem'))).toBe(true);
    });

    it('has a submit button', function() {
      expect(browser.isElementPresent(by.id('addNewItem'))).toBe(true);
    });
  });

  describe('When creating an item', function(){

    var activeItems = element.all(by.repeater('item in ctrl.listActive'));

    beforeEach(function(){
      element(by.model('newItem')).sendKeys("Get milk");
      element(by.id('addNewItem')).click();
    });

    it('it can display the item', function(){
      expect(activeItems.getText()).toMatch(/Get milk/);
    });

    it('it has a checkbox to mark item as completed', function(){
      expect(browser.isElementPresent(by.id('checkBoxModel.completed'))).toBe(true);
    });

    it('can delete the item', function(){
      element(by.id('deleteItem')).click();
      expect(activeItems.getText()).toBeEmpty;
    });

    // it('can edit the item', function(){
    //
    // });

    it('can toggle the item to completed', function(){

    });
  });
});
