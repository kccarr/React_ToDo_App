var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoItem.value;

    if (todoText.length > 0) {
      this.refs.todoItem.value = '';
      this.props.handleAddTodo(todoText);
    } else {
      this.refs.todoItem.focus();
    }

    // first method I used to add to do list items
    // I am changing the method in order to follow
    // video course

    // e.preventDefault();
    // var todoListBase = this.props.todos || [];
    // var todoID = todoListBase.length + 1;
    // var todoInput = this.refs.todoItem.value;
    //
    // if (todoInput !== '') {
    //   this.refs.todoItem.value = '';
    //   todoListBase.push({id: todoID, text: todoInput});
    //   this.props.handleAddTodo(todoListBase);
    // } else {
    //   // if user does not enter valid text then the cursor
    //   // goes back to form
    //   this.refs.todoItem.focus();
    // }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="todo-app-form">
          <input type="text" ref="todoItem" placeholder="Add a new To Do Item"/>
          <button className="button expanded">Add To Do</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
