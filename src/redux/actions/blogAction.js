import { GET_CONTENT } from "../actionTypes/actionTypes";

export const getAllContent = (product) => {
  return {
    type: GET_CONTENT,
    payload: product,
  };
};
