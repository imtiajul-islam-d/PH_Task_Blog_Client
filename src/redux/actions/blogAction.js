import { ADD_TO_HISTORY, GET_CONTENT } from "../actionTypes/actionTypes";

export const getAllContent = (blog) => {
  return {
    type: GET_CONTENT,
    payload: blog,
  };
};

export const addToHistory = (blog) => {
  return {
    type: ADD_TO_HISTORY,
    payload: blog,
  };
};
