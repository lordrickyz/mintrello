import { RECEIVE_COLUMNS, REMOVE_COLUMN } from "../actions/column_actions";
import initialData from "../database/initial_data";

const initialState = initialData.columnOrder;

const columnOrderReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COLUMNS:
      return Object.assign({}, state, {
        [action.columns.id]: action.columns.id,
      });
    case REMOVE_COLUMN:
      let newState = Object.assign({}, state);
      delete newState[action.column];
      return newState;
    default:
      return state;
  }
};

export default columnOrderReducer;
