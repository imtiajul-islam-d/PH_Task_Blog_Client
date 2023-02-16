import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import blogsState from "./middlwares/blogs";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(blogsState, thunk))
);
export default store;
