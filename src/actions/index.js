import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import { FETCH_POSTS } from "./types";

const requestPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response });
};

export default requestPosts;
