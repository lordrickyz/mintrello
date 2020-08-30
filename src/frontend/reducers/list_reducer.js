import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST,
} from "../actions/list_actions";
import uuid from "uuid-v4";

const initialState = {
  [uuid()]: {
    title: "Todo",
    items: [],
  },
  [uuid()]: {
    title: "In progress",
    items: [],
  },
  [uuid()]: {
    title: "Done",
    items: [],
  },
};

const listReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      let newList = {
        [uuid()]: {
          title: action.list,
          items: [],
        },
      };
      return Object.assign({}, state, newList);
    case REMOVE_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.list];
      return newState;
    default:
      return state;
  }
};

export default listReducer;
