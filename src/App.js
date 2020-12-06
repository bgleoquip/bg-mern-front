import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<div className="App ">
			<h1>TODOS</h1>
			<div className="form">
				<TodoForm/>
			</div>
			<div className="MuiGrid-container css-i5eb52 ">
				<TodoList/>
			</div>
		</div>
	);
}

export default App;
