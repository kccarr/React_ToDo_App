var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAppForm = require('TodoAppForm');

describe('TodoAppForm', () => {
  it('should exist', () => {
    expect(TodoAppForm).toExist();
  });

  it('should call handleAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var todoappForm = TestUtils.renderIntoDocument(<TodoAppForm handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoappForm));

    todoappForm.refs.todoItem.value = "Added a test for adding items";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalled("Added a test for adding items");
  });


});
