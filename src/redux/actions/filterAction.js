import {
  SORT_BY_FIRST,
  SORT_BY_LATEST,
  TOGGLE_TAG,
} from "../actionTypes/actionTypes";

export const toogleFtL = () => {
  return {
    type: SORT_BY_LATEST,
  };
};
export const toogleLtF = () => {
  return {
    type: SORT_BY_FIRST,
  };
};
export const toggleTag = (tag) => {
  return {
    type: TOGGLE_TAG,
    payload: tag,
  };
};
