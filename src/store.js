import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cookBooReducer from "./reducers/cook-book-list";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  cookBooReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
