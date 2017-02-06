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
    var todoText = 'Added a test for adding items';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoItem.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    // expect(spy).toHaveBeenCalledWith(todoText);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call handleAddTodo if invalid text entered', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoItem.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
