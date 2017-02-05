var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var todoappForm = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoappForm));

    todoappForm.refs.todoItem.value = "Added a test for adding items";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalled("Added a test for adding items");
  });


});
