import { FETCH_USER } from "../actions/types";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(JSON.stringify(action.payload));
      return [...state, action.payload];

    default:
      break;
  }
  return state;
};

export default userReducer;
