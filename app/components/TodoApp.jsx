var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Finish ToDo Application'
        },
        {
          id: 3,
          text: 'Apply for programming jobs'
        }
      ]
    }
  },
  handleAddTodo: function(todos) {
    this.setState({
      todos: todos
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo todos={todos} handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
