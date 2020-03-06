import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import userReducer from "./UserReducer";
import reviewResponseReducer from "./reviewResponseReducer";
import commentReducer from "./reviewCommentsReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
  review: reviewResponseReducer,
  comment: commentReducer
});
