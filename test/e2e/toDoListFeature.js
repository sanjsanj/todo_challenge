describe('ToDoList', function() {
  it('has a tab title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('has a webpage title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('To Do List');
  });
});
