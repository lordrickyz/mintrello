import {
  RECEIVE_COLUMN,
  DELETE_COLUMN,
  UPDATE_COLUMN,
  UPDATE_COLUMNS,
} from "./../actions/columnActions";

const columnsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_COLUMN:
      newState[action.column.id] = action.column;
      return newState;
    case UPDATE_COLUMNS:
      newState[action.columns[0].id] = action.columns[0];
      newState[action.columns[1].id] = action.columns[1];
      return newState;
    case RECEIVE_COLUMN:
      return Object.assign({}, newState, { [action.column.id]: action.column });
    case DELETE_COLUMN:
      delete newState[action.column.id];
      return newState;
    default:
      return state;
  }
};
export default columnsReducer;
