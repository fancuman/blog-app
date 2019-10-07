import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import { FETCH_POSTS, FETCH_USER } from "./types";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(requestPosts());
  _.uniq(_.map(getState().posts.data, "userId")).forEach(userId =>
    dispatch(fetchUser(userId))
  );
};

export const requestPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get("/users/" + id);
  dispatch({ type: FETCH_USER, payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get("/users/" + id);
//   dispatch({ type: FETCH_USER, payload: response.data });
// });
