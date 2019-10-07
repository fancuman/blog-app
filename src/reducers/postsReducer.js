import { FETCH_POSTS } from "../actions/types";

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;

    default:
      return state;
  }
};

export default posts;
