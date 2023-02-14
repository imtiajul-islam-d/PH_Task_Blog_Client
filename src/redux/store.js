import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import blogReducer from "./reducers/blogReducer";

const store = createStore(blogReducer, composeWithDevTools());
export default store;
