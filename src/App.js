import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<div className="App">
			<table style={{width:"50%"}}>
				<thead>
					<tr>
						<th> App </th>
					</tr>
				</thead>
				<tbody>
				<TodoForm/>
				<TodoList/>
				</tbody>
			</table>
		</div>
	);
}

export default App;
