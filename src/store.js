import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import cookBookReducer from "./reducers/cook-book-reducer";
import previousRecipesReducer from "./reducers/previous-recipes-reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  cookBookReducer,
  previousRecipesReducer
});
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
