var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
      expect(actualTodos.length).toBeGreaterThan(0);
    });

    it('should not set invalid todos array', () => {
      var todos = 23;
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array with no valid arguments', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return an array with valid todo arguments', () => {
      var todos = [{
        id: 23,
        test: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });


  });
});
