import React from "react";
import { connect } from "react-redux";
import { completeTodo, deleteTodo } from "../../Redux/actions";

import "./TodoItem.css";

const TodoItem = ({ todo, completeTodo, deleteTodo }) => (
	<div className=" css-1ni2y1i MuiGrid-container">
		<div className=" MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-grid-xs-8">{todo.title}</div>
		<div className=" MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-flex-end MuiGrid-grid-xs-4">
			<button className="MuiIconButton-root MuiIconButton-colorPrimary" onClick={() => completeTodo(todo._id)}>
				{todo && todo.complete ? "" : "✓"}
			</button>
			<button className="MuiIconButton-root MuiIconButton-colorSecondary" onClick={() => deleteTodo(todo._id)}>
			{"X"}
			</button>
		</div>
	</div>
);

// export default Todo;
export default connect(
  null,
  { completeTodo, deleteTodo }
)(TodoItem);
