import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import { FETCH_POSTS, FETCH_USER } from "./types";

export const requestPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get("/users/" + id);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export default {};
