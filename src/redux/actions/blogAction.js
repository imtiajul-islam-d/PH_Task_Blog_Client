import { ADD_CONTENT, ADD_TO_HISTORY, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

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

export const addContent = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog
  }
}

export const updateContent = (blog) => {
  return {
    type: UPDATE_CONTENT,
    payload: blog
  }
}