import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./UserReducer";

export default combineReducers({
  user: userReducer,
  movie: movieReducer
});
