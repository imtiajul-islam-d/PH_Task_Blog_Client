import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const blogsState = (store) => (next) => (action) => {
//   const state = store.getState();
//   const history = state.blogs.history;
  const d = new Date();
  const time = d.getTime();
  if (action.type === ADD_TO_HISTORY) {
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        readedTime: time,
      },
    };
    return next(newAction)
  }
  return next(action)
};
export default blogsState;
