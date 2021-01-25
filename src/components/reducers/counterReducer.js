import { UPDATE_COUNTER } from "./../actions/counterActions";

const counterReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = state;
  switch (action.type) {
    case UPDATE_COUNTER:
      newState++;
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
