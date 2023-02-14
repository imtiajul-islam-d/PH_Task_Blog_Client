import { GET_CONTENT } from "../actionTypes/actionTypes";

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
    default:
      return state;
  }
};
export default blogReducer;
