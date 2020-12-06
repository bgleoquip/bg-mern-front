import React from "react";
import { connect } from "react-redux";
import { getTodo } from "../../Redux/actions";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.getTodo();
  }
  // componentWillReceiveProps(nextProp){
  //   if (this.props.posts.selectedItems.toString() != nextProp.posts.selectedItems.toString()){
  //     console.log("componentWillReceiveProps")
  //     this.props.getTodo();
  //   }
  // }
  render() {
    let posts = this.props.posts;
    return (
        <React.Fragment>
            {posts && posts.selectedItems && posts.selectedItems.length
            ? posts.selectedItems.map((todo, index) => {
                return <TodoItem key={`todo-${todo._id}`} todo={todo} />;
                })
            : "No posts!"}
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
