import { RESET_DATA } from "../actions/resetActions";

const initialState = false;

const resetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_DATA:
      return true;
    default:
      return false;
  }
};

export default resetDataReducer;
