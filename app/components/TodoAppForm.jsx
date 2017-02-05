var React = require('react');

var TodoAppForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todoListBase = this.props.todos || [];
    var todoID = todoListBase.length + 1;
    var todoInput = this.refs.todoItem.value;

    if (todoInput !== '') {
      this.refs.todoItem.value = '';
      todoListBase.push({id: todoID, text: todoInput});
      this.props.handleAddTodo(todoListBase);
    }
  },

  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-app-form">
          <input type="text" ref="todoItem" placeholder="Add a new To Do Item"/>
          <button className="button expanded">Add To Do</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoAppForm;
