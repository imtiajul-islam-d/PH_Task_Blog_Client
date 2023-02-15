import { SORT_BY_FIRST, SORT_BY_LATEST } from "../actionTypes/actionTypes";

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
