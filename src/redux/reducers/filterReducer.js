import {
  SORT_BY_FIRST,
  SORT_BY_LATEST,
  TOGGLE_TAG,
} from "../actionTypes/actionTypes";

const initialState = {
  tags: [],
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
    case TOGGLE_TAG:
      if (!state.tags.includes(action.payload)) {
        return {
          ...state,
          tags: [...state.tags, action.payload],
        };
      } else {
        return {
          ...state,
          tags: state.tags.filter((tag) => tag !== action.payload),
        };
      }
    default:
      return state;
  }
};
export default filterReducer;
