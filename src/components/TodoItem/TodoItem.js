import React from "react";
import { connect } from "react-redux";
import { completeTodo, deleteTodo } from "../../Redux/actions";

const TodoItem = ({ todo, completeTodo, deleteTodo }) => (
    <tr style={{width:"100%"}}>
      <td className="todo-item" style={{width:"80%"}}>{todo.title}</td>
      <td onClick={() => completeTodo(todo._id)} style={{width:"10%"}}>{todo && todo.complete ? "" : "✓"}</td>
      <td onClick={() => deleteTodo(todo._id)} style={{width:"10%"}}>{"X"}</td>
    </tr>
);

// export default Todo;
export default connect(
  null,
  { completeTodo, deleteTodo }
)(TodoItem);
