import { ADD_AN_ITEM, REMOVE_AN_ITEM, COMPLETE_AN_ITEM, GET_ITEMS} from "../actionType.js";

const initialState = {
    selectedItems: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_AN_ITEM: {
            const currentItem = action.payload;
            return {
                ...state,
                selectedItems:[...state.selectedItems, currentItem]
            }
        }
        case REMOVE_AN_ITEM: {
            const posts = state.selectedItems;
            const index = posts.findIndex(post => post._id === action.payload._id)
            return {
                ...state,
                selectedItems:[
                    ...posts.slice(0, index), // everything before current post
                    ...posts.slice(index + 1), // everything after current post
                ]}
        }
        case COMPLETE_AN_ITEM: {
            const posts = [...state.selectedItems];
            // const index = posts.findIndex(post => post._id === action.payload._id)
            // posts[index].complete = true ;
            const newPosts = posts.map(post => {
                if(post._id  === action.payload._id) {
                    return {...post, complete:true}
                } else return {...post}
            })
            return  {
                ...state,
                selectedItems:newPosts
            }
        }
        case GET_ITEMS: {
            return {
                ...state,
                selectedItems: [...action.payload]
            }
        }
        default:
            return state;
    }
}

