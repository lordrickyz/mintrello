import { RECEIVE_CARDS, REMOVE_CARD } from "../actions/card_actions";
import initialData from "../database/initial_data";

const initialState = initialData.cards;

const cardReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case REMOVE_CARD:
      let newState = Object.assign({}, state);
      delete newState[action.card];
      return newState;
    default:
      return state;
  }
};

export default cardReducer;
