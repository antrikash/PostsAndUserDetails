import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentsReducer
});
