import { ADD_AN_ITEM, REMOVE_AN_ITEM, COMPLETE_AN_ITEM, GET_ITEMS } from "./actionType";
import axios from "axios";

var url = "http://localhost:5000/posts" //"https://bg-mern-back.herokuapp.com";
export const addTodo = content => {
	return dispatch => {
		axios
		.post( url + "/", content).then((response) => {
			dispatch({
				type: ADD_AN_ITEM,
				payload: response.data
			});
		}).catch(error=>{
			console.log(error)
		})
	}
};

export const completeTodo = id => {
	return dispatch => {
		axios.put(url + "/" + id + "/completePost").then((response) => {
			console.log(response)
			dispatch({
				type: COMPLETE_AN_ITEM,
				payload: response.data
			});
		})	
}}

export const deleteTodo = id => {
	return dispatch => {
		axios
		.delete( url + "/" + id ).then((response) => {
			// console.log(response)
			dispatch({
				type: REMOVE_AN_ITEM,
				payload: response.data
			});
		})	
	}
};
export const getTodo = content => {
	return dispatch => {
		axios
		.get( url + "/").then((response) => {
			console.log(response)
			dispatch({
				type: GET_ITEMS,
				payload: response.data
			});
		})	
	}
};