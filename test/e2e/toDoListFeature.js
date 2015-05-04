describe('ToDoList', function() {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  describe('When initialized', function(){

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });

    it('has an input form', function() {
      expect(browser.isElementPresent(by.model('ctrl.newItem'))).toBe(true);
    });

    it('has a submit button', function() {
      expect(browser.isElementPresent(by.id('addNewItem'))).toBe(true);
    });
  });

  describe('When creating an item', function(){

    var activeItems;

    beforeEach(function(){
      activeItems = element.all(by.model('item.name'));

      element(by.model('ctrl.newItem')).sendKeys('Get milk');
      element(by.buttonText('Add')).click();
    });

    it('it can display the item', function(){
      expect(element.all(by.model('item.name')).getText()).toMatch(/Get milk/);
    });

    it('it has a checkbox to mark item as completed', function(){
      expect(browser.isElementPresent(by.id('completeCheckbox'))).toBe(true);
    });

    it('can clear completed items', function(){
      element(by.id('completeCheckbox')).click();
      element(by.buttonText('Clear Completed')).click();
      expect(activeItems.getText()).toBeEmpty;
    });
  });
});
