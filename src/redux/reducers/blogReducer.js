import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_TO_HISTORY:
      const filteredHistory = state.history.filter(
        (blog) => blog._id !== action.payload._id
      );

      return {
        ...state,
        history: [...filteredHistory, action.payload],
      };
    case ADD_CONTENT: 
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      }
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
        history: state.history.filter(
          (history) => history._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default blogReducer;
