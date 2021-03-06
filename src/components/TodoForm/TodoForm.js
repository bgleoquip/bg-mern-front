import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../Redux/actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    if(this.state.input === "") return;
    this.props.addTodo({
      title: this.state.input,
      complete:false
    });
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}> ➤  </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
// export default AddTodo;
