import {
  RECEIVE_COLUMN_ORDER,
  RECEIVE_COLUMN,
  DELETE_COLUMN,
} from "./../actions/columnOrderActions";

const columnOrderReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Array.from(state);
  switch (action.type) {
    case RECEIVE_COLUMN_ORDER:
      return action.columnOrder;
    case RECEIVE_COLUMN:
      newState.push(action.column.id);
      return newState;
    case DELETE_COLUMN:
      newState = newState.filter((id) => id !== action.column.id);
      return newState;
    default:
      return state;
  }
};
export default columnOrderReducer;
