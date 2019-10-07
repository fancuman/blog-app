import { combineReducers } from "redux";
import posts from "./postsReducer";
import userReducer from "./userReducer";

export default combineReducers({ posts, users: userReducer });
