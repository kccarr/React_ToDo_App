//3rd party module
var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos: [];
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(a => {
      return !a.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter(a => (searchText !== "") ? (a.text === searchText) : a.text);

    // Sort todos with non-completed first
    filteredTodos = filteredTodos.sort(a => a.completed);

    return filteredTodos;
  }
};
