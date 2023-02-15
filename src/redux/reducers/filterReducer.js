import { SORT_BY_FIRST, SORT_BY_LATEST } from "../actionTypes/actionTypes";

const initialState = {
  LTF: true,
  FTL: false,
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_LATEST:
      return {
        ...state,
        LTF: !state.LTF,
        FTL: !state.FTL,
      };
    case SORT_BY_FIRST:
      return {
        ...state,
        FTL: !state.FTL,
        LTF: !state.LTF,
      };
    default:
      return state;
  }
};
export default filterReducer;
