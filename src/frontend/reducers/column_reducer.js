import { RECEIVE_COLUMNS, REMOVE_COLUMN } from "../actions/column_actions";
import initialData from "../database/initial_data";

const initialState = initialData;

const columnReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COLUMNS:
      return action.columns;
    case REMOVE_COLUMN:
      let newState = Object.assign({}, state);
      delete newState[action.column];
      return newState;
    default:
      return state;
  }
};

export default columnReducer;
