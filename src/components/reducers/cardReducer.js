import {
  RECEIVE_CARD,
  DELETE_CARD,
  DELETE_COLUMN,
  UPDATE_CARD,
} from "./../actions/cardActions";

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CARD:
      return Object.assign({}, state, { [action.card.id]: action.card });
    case DELETE_CARD:
      delete newState[action.cardId];
      return newState;
    case DELETE_COLUMN:
      for (let i = 0; i < action.column.cardIds.length; i++) {
        delete newState[action.column.cardIds[i]];
      }
      return newState;
    case UPDATE_CARD:
      newState[action.card.id] = action.card;
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;
