import React from "react";
import { connect } from "react-redux";
import { getTodo } from "../../Redux/actions";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tab: "ALL"}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		this.props.getTodo();
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({tab:event.target.id})
		// console.log(answer);
	};
	render() {
		let posts = this.props.posts;
		let state = this.state;
		return (
			<React.Fragment>
				<div className="css-iuwsba MuiGrid-container">
					{posts && posts.selectedItems && posts.selectedItems.length
						? posts.selectedItems.map((todo, index) => {
							if(state.tab === "ALL"){
								return <TodoItem key={`todo-${todo._id}`} todo={todo} />
							} else if( state.tab === "ACTIVE") {
								if(!todo.complete){
									return <TodoItem key={`todo-${todo._id}`} todo={todo} />
								} else { return ""}
							} else if( state.tab === "COMPLETE") {
								if(todo.complete){
									return <TodoItem key={`todo-${todo._id}`} todo={todo} />
								} else { return ""}
							}
							})
						: "No posts!"}
				</div>
				<div className="" style={{width:"100%"}}>
					<div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-center MuiGrid-grid-xs-2">
						<button className="" tabindex="0" type="button"  >
							{posts && posts.selectedItems && posts.selectedItems.length? "ALL("+posts.selectedItems.length+")":""}
						</button>
					</div>
					<div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-center MuiGrid-grid-xs-10" style={{float:"right"}}>
						<button id="ALL" className={state.tab === "ALL"?"isActive":""} tabindex="0" type="button"  onClick={this.handleClick}>
							All
						</button>
						<button id="ACTIVE" className={state.tab === "ACTIVE"?"isActive":""} tabindex="0" type="button" onClick={this.handleClick} >
							ACTIVE
						</button>
						<button id="COMPLETE" className={state.tab === "COMPLETE"?"isActive":""} tabindex="0" type="button"  onClick={this.handleClick}>
							COMPLETE						
						</button>
					</div>
				</div>
			</React.Fragment>
		);
  }
}
function mapStateToProps(state) {
    return { posts: state.posts }
  }
export default connect(
    mapStateToProps,
  { getTodo }
)(TodoList);
// export default AddTodo;
