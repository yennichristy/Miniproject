import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import userReducer from "./UserReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer
});
