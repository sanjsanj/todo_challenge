describe('ToDoList', function() {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // it('prompts me to enter a ToDo item', function(){
  //   var x = element(by.id('newItem'));
  //   expect(x.getText()).toContain('What needs doing?');
  //   expect(x.getText()).toEqual('What needs doing?');
  //   expect(x).toEqual('What needs doing?');
  // });

  it('should have an input form', function() {
    expect(browser.isElementPresent(by.model('newItem'))).toBe(true);
  });


  it('can create an item', function(){
    element(by.model('newItem')).sendKeys("Get milk");
    element(by.id('addNewItem')).click();
    var x = element.all(by.repeater('item in ctrl.listActive'));
    expect(x.getText()).toContain("Get milk")
  });
});
