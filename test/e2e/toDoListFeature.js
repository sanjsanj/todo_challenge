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

    beforeEach(function(){
      activeItems = element.all(by.id('todoText'));

      element(by.id('newItemId')).sendKeys('Get milk');
      element(by.id('addNewItem')).click();
    });

    it('has a task count of 1', function(){
      expect(element(by.id('taskCount')).getText()).toEqual('Total Tasks: 1');
    });

    it('it can display the item', function(){
      expect(element.all(by.css('.todoTextClass')).getAttribute('value')).toContain('Get milk');
    });

    it('it has a checkbox to mark item as completed', function(){
      expect(browser.isElementPresent(by.id('completeCheckbox'))).toBe(true);
    });

    it('can clear completed items', function(){
      element(by.id('completeCheckbox')).click();
      element(by.buttonText('Clear Completed')).click();
      expect(element.all(by.css('.todoTextClass')).getAttribute('value')).toBeEmpty;
    });
  });
});
