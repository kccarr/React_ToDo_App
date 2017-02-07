var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoToggle = TestUtils.renderIntoDocument(<TodoApp/>);
    todoToggle.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoToggle.state.todos[0].completed).toBe(false);

    // call handleToggle with id of first item
    todoToggle.handleToggle(todoToggle.state.todos[0].id);
    // verify that value changed
    expect(todoToggle.state.todos[0].completed).toBe(true);
    //Expect completedAt to be a number
    expect(todoToggle.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from true to false, completedAt gets removed
  it('should remove completedAt value when toggled from true to false', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 145
    };
    var todoToggle = TestUtils.renderIntoDocument(<TodoApp/>);
    todoToggle.setState({todos: [todoData]});

    // check that todos first item has completed value of false
    expect(todoToggle.state.todos[0].completed).toBe(true);

    // call handleToggle with id of first item
    todoToggle.handleToggle(todoToggle.state.todos[0].id);
    // verify that value changed
    expect(todoToggle.state.todos[0].completed).toBe(false);

    expect(todoToggle.state.todos[0].completedAt).toEqual(undefined);
  });
});
