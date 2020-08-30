export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";
export const CLEAR_CARD_ERRORS = "CLEAR_CARD_ERRORS";


export const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card,
});

export const receiveCards = (cards) => ({
  type: RECEIVE_CARDS,
  cards,
});

export const removeCard = ({card}) => ({
  type: REMOVE_BOARD,
  card,
})
